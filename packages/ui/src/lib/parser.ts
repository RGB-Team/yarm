import { removeOperator, parseValue } from "@yarm/ui/lib/utils";

enum TokenType {
  COLLECTION = "collection",
  AUTHOR = "author",
  TITLE = "title",
  TAGS = "tags",
  VERSION = "version",
}

type TokenValue = string;

interface Tokenizer {
  searchQuery: string;
  tokenize(): Map<TokenType, TokenValue>;
}

class Tokenizer implements Tokenizer {
  searchQuery = "";

  constructor(searchQuery: string) {
    this.searchQuery = searchQuery.toLowerCase();
  }

  tokenize() {
    const tokens = new Map<TokenType, TokenValue>();
    let currentToken = "";

    let inQuotes = false;

    for (let i = 0; i < this.searchQuery.length; i++) {
      const char = this.searchQuery[i];

      if (char === "'") {
        inQuotes = !inQuotes;
        continue;
      }

      if (char === " " && inQuotes) {
        currentToken += char;
        continue;
      }

      if (char === " " && !inQuotes) {
        const [key, value] = currentToken.split(":");
        if (key && value) {
          tokens.set(key as TokenType, value);
        }

        if (!key && value) {
          tokens.set(TokenType.TITLE, value);
        }

        currentToken = "";
        continue;
      }
      currentToken += char;
    }

    if (currentToken) {
      const [key, value] = currentToken.split(":");
      if (key && value) {
        tokens.set(key as TokenType, value);
      } else if (!key) {
        tokens.set(TokenType.TITLE, currentToken);
      }
    }

    return tokens;
  }
}

enum TokenError {
  INVALID_COLLECTION_VALUE = "invalid-collection-value",
  INVALID_AUTHOR_VALUE = "invalid-author-value",
  INVALID_TITLE_VALUE = "invalid-title-value",
  INVALID_TAGS_VALUE = "invalid-tags-value",
  INVALID_VERSION_VALUE = "invalid-version-value",
}

enum ErrorLevel {
  WARNING = "warning",
  DANGER = "danger",
}

type ErrorType = {
  level: ErrorLevel;
  type: TokenError;
};

type LinterReturnType = {
  errors: Map<ErrorType, TokenValue>;
  suggestions: Map<number, string>;
};

interface ILinter {
  searchQuery: string;
  tokens: Map<TokenType, TokenValue>;
  lint(): LinterReturnType;
}

class Linter implements ILinter {
  searchQuery = "";
  tokens = new Map<TokenType, TokenValue>();

  constructor(tokens: Map<TokenType, TokenValue>, searchQuery: string) {
    this.tokens = tokens;
    this.searchQuery = searchQuery;
  }

  // Function to get the position of the reserved word and value
  getReservedWordPosition(reservedWord: string): number {
    const position = this.searchQuery.indexOf(reservedWord);
    if (position !== -1) {
      return position + reservedWord.length + 1; // Skip the colon after the reserved word
    }
    return -1; // Reserved word not found
  }

  lint() {
    const tokens = this.tokens;
    const errors = new Map<ErrorType, TokenValue>();
    const suggestions = new Map<number, string>(); // Store suggestions with position and message

    tokens.forEach((value, key) => {
      let valueIndex = -1;

      // First, determine the position of the reserved word in the searchQuery
      if (key === TokenType.VERSION) {
        valueIndex = this.getReservedWordPosition("version:");
      } else if (key === TokenType.COLLECTION) {
        valueIndex = this.getReservedWordPosition("collection:");
      } else if (key === TokenType.AUTHOR) {
        valueIndex = this.getReservedWordPosition("author:");
      } else if (key === TokenType.TITLE) {
        valueIndex = this.getReservedWordPosition("title:");
      } else if (key === TokenType.TAGS) {
        valueIndex = this.getReservedWordPosition("tags:");
      }

      // Check if version contains non-numeric characters
      if (key === TokenType.VERSION && valueIndex !== -1) {
        if (isNaN(Number(parseValue(removeOperator(value))))) {
          value.split("").forEach((char, offset) => {
            if (char != "." && isNaN(Number(char))) {
              suggestions.set(
                valueIndex + offset - 1,
                "Unexpected character. Expected a number."
              );
            }
          });
          errors.set(
            {
              level: ErrorLevel.DANGER,
              type: TokenError.INVALID_VERSION_VALUE,
            },
            "The value provided is not a number. The syntax should be of this type: version:>1.0.0"
          );
        }
      }

      // Check the rest of the properties
      if (valueIndex !== -1 && key !== TokenType.VERSION) {
        if (!value || value === " ") {
          errors.set(
            {
              level: ErrorLevel.WARNING,
              type: TokenError[
                `INVALID_${TokenType[key as unknown as keyof typeof TokenType]}_VALUE` as keyof typeof TokenError
              ],
            },
            `The value provided is empty. The syntax should be of this type: ${key}:'your value'`
          );
          suggestions.set(
            valueIndex,
            `Suggestion: Provide a valid value for ${key}, e.g., '${key}:'your value'`
          );
        }
      }
    });

    return { errors, suggestions }; // Return both errors and suggestions
  }
}

interface IParser {
  searchQuery: string;
  lint(): LinterReturnType;
}

class Parser implements IParser {
  searchQuery = "";

  constructor(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  private parse() {
    const tokenizer = new Tokenizer(this.searchQuery);
    const tokens = tokenizer.tokenize();

    return tokens;
  }

  lint() {
    const tokens = this.parse();
    const linter = new Linter(tokens, this.searchQuery);
    const errors = linter.lint();

    return errors;
  }
}

export {
  Parser,
  TokenType,
  TokenError,
  type TokenValue,
  ErrorLevel,
  type LinterReturnType,
};

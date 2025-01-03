import leven from "leven";

const KEYWORDS = ["author", "collection", "tags", "version"];

type FuzzyMatchResult = {
  word: string;
  distance: number;
  normalizedScore: number;
  matchingCharacters: MatchingCharacter[];
};

// Fuzzy match results
/** @desc Return a list of fuzzy match results for a given key to compare against a list of keywords. Each result contains the word, distance, normalized score, and matching characters */
const fuzzyMatchResults = (key: string) => {
  const listMatches: FuzzyMatchResult[] = [];
  KEYWORDS.forEach((word) => {
    const distance = leven(key, word);
    const maxLength = Math.max(key.length, word.length);
    const normalizedScore = distance / maxLength;
    const matchingCharacters = getMatchingCharacters(key, word);
    listMatches.push({
      word,
      distance,
      normalizedScore,
      matchingCharacters,
    });
  });
  return listMatches;
};

type MatchingCharacter = {
  char: string;
  queryIndex: number;
  targetIndex: number;
};

/** @def Get the matching characters between two strings */
function getMatchingCharacters(query: string, target: string) {
  const matches: MatchingCharacter[] = [];
  const queryArray = query.split("");
  const targetArray = target.split("");

  // Iterate over both strings and match characters without position constraints
  queryArray.forEach((char, i) => {
    const indexInTarget = targetArray.indexOf(char, i); // Find the next occurrence of the char
    if (indexInTarget !== -1) {
      matches.push({ char, queryIndex: i, targetIndex: indexInTarget });
      targetArray[indexInTarget] = ""; // Mark this character as used
    }
  });

  return matches;
}

export { fuzzyMatchResults };

import { Parser } from "@yarm/ui/lib/parser";

const useParser = (searchQuery: string) => {
  const parserInstance = new Parser(searchQuery);
  const { errors, suggestions } = parserInstance.lint();
  const isValid = errors.size === 0 && searchQuery.length > 0;
  const isError = errors.size > 0;

  return {
    errors,
    suggestions,
    isValid,
    isError,
  };
};

export { useParser };

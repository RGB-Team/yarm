import { fuzzyMatchResults } from "@yarm/ui/lib/fuzzy-match";

const useMatched = (key: string) => {
  return fuzzyMatchResults(key);
};

export { useMatched };

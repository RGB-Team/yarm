"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@yarm/ui/components/ui/input";
import { Button } from "@yarm/ui/components/ui/button";
import { Search, X, ArrowRight } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { SearchResults } from "@/components/search/search-results";
import { searchCollections } from "@/lib/search";
import dummyData from "@/data/dummy.json";
import { useOnClickOutside } from "@/hooks/use-click-outside";
import { SearchResultsDropdown } from "./search-results-dropdown";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const searchRef = useRef<HTMLDivElement>(null);

  const results = debouncedQuery
    ? searchCollections(dummyData.collections, { query: debouncedQuery })
    : [];

  const limitedResults = results.slice(0, 3);
  const hasMoreResults = results.length > 3;

  useOnClickOutside(searchRef, () => setIsSearching(false));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsSearching(false);
    }
  };

  const handleShowMore = () => {
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setIsSearching(false);
  };

  const handleClear = () => {
    setQuery("");
    setIsSearching(false);
    router.replace("/", { scroll: false });
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearching) {
        e.preventDefault();
        setIsSearching(true);
        const input = document.querySelector<HTMLInputElement>(
          'input[type="search"]'
        );
        input?.focus();
      } else if (e.key === "Escape" && isSearching) {
        setIsSearching(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearching]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative">
          <Input
            placeholder="Search components, collections..."
            className="w-full pl-10 border-0 bg-background"
            value={query}
            onChange={handleSearch}
            onFocus={() => setIsOpen(true)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="absolute right-[0.8px] top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {query ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="bg-black/10"
              onClick={handleClear}
              aria-label="Clear search"
            >
              <X className="h-4 w-4 text-muted-foreground/70" />
            </Button>
          ) : (
            <div className="text-sm text-muted-foreground/70 peer-focus:opacity-0 transition-opacity duration-200 flex items-center gap-2">
              <span>
                Type
                <kbd className="pointer-events-none text-sm border border-muted-foreground/20 rounded-sm px-1 mx-2 py-0.5">
                  /
                </kbd>
                to search
              </span>
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="bg-black/10"
              >
                <Search className="text-muted-foreground/70" />
              </Button>
            </div>
          )}
        </div>
      </form>

      {isSearching && query && (
        <div className="absolute w-full mt-2 rounded-lg border bg-background shadow-lg z-50">
          <SearchResults results={limitedResults} />
          {hasMoreResults && (
            <div className="p-4 border-t border-border">
              <Button
                variant="ghost"
                className="w-full justify-between text-muted-foreground hover:text-foreground"
                onClick={handleShowMore}
              >
                Show all results
                <span className="flex items-center text-sm text-muted-foreground/70">
                  press <kbd className="mx-2 px-2 py-0.5 border rounded-sm">Enter</kbd>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Button>
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <div className="relative">
          <SearchResultsDropdown 
            query={query} 
            onShowMoreAction={handleShowMore}
            onCloseAction={() => setIsOpen(false)}
          />
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

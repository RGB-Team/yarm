"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@yarm/ui/components/ui/input";
import { Button } from "@yarm/ui/components/ui/button";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { SearchResults } from "@/components/search/search-results";
import { searchRegistries } from "@/lib/search";
import dummyData from "@/data/dummy.json";
import { useOnClickOutside } from "@/hooks/use-click-outside";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const results = debouncedQuery 
    ? searchRegistries(dummyData.registries, { query: debouncedQuery })
    : [];

  useOnClickOutside(searchRef, () => setIsSearching(false));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsSearching(false);
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearching) {
        e.preventDefault();
        setIsSearching(true);
        const input = document.querySelector<HTMLInputElement>('input[type="search"]');
        input?.focus();
      } else if (e.key === "Escape" && isSearching) {
        setIsSearching(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearching]);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="relative group">
        <Input
          type="search"
          placeholder="Search components, registries..."
          className="w-full pl-4 pr-8 bg-white/10 backdrop-blur-md placeholder:text-muted-foreground/50 peer"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsSearching(true);
          }}
          onFocus={() => setIsSearching(true)}
        />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-sm text-muted-foreground/70 peer-focus:opacity-0 transition-opacity duration-200">
          <span>
            Type
            <kbd className="pointer-events-none text-sm border border-muted-foreground/20 rounded-sm px-1 mx-2 py-0.5">
              /
            </kbd>
            to search
          </span>
          <Button type="submit" variant="ghost" size="icon" className="bg-black/10">
            <Search className="text-muted-foreground/70" />
          </Button>
        </div>
      </form>

      {isSearching && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background/40 backdrop-blur-xl border rounded-lg shadow-lg p-4 z-50">
          <SearchResults results={results} isLoading={false} />
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "@yarm/ui/components/ui/button";
import { GithubIcon } from "./icons/github";
import { SheetIcon } from "./icons/sheet";
import { BlogIcon } from "./icons/blog";
import React, { useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { searchCollections } from "@/lib/search";
import { SearchBar } from "@/components/search/search-bar";
import dummyData from "@/data/dummy.json";

export function Navbar() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  const results = debouncedQuery
    ? searchCollections(dummyData.collections, { query: debouncedQuery })
    : [];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left section with logo */}
          <div className="flex items-center gap-4">
            <Logo className="h-6" />
          </div>

          {/* Center section with search */}
          <div className="flex-1 mx-4 max-w-2xl">
            <SearchBar />
          </div>

          {/* Right section with navigation */}
          <nav className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <BlogIcon className="w-4 h-4" />
              <Link
                // href="/blog"
                href="#"
                className="text-lg font-medium text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <SheetIcon className="w-4 h-4" />
              <Link
                // href="#"
                href="/docs"
                className="text-lg font-medium text-muted-foreground hover:text-foreground"
              >
                Docs
              </Link>
            </div>

            <Button className="flex items-center gap-2 text-secondary bg-card">
              <GithubIcon className="w-4 h-4 fill-secondary" />
              <Link
                href="#"
                // href="/sign-in"
                className="text-lg font-medium text-secondary"
              >
                Sign in
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

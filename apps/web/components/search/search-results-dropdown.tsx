"use client";

import Link from "next/link";
import { Badge } from "@yarm/ui/components/ui/badge";
import { Avatar, AvatarFallback } from "@yarm/ui/components/ui/avatar";
import { DotSeparator } from "@yarm/ui/components/ui/separator";
import { Button } from "@yarm/ui/components/ui/button";
import { ArrowRight } from "lucide-react";
import { searchCollections } from "@/lib/services/search-service";
import { useEffect, useState } from "react";

interface SearchResultsDropdownProps {
  query: string;
  onShowMoreAction: () => void;
  onCloseAction: () => void;
}

export function SearchResultsDropdown({
  query,
  onShowMoreAction,
  onCloseAction,
}: SearchResultsDropdownProps) {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (!query) return;
    
    searchCollections({ query }).then((data) => {
      setResults(data.items);
    });
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        onCloseAction();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCloseAction]);

  const limitedResults = results.slice(0, 3);
  const hasMoreResults = results.length > 3;

  if (!query) return null;

  return (
    <div className="absolute w-full mt-2 rounded-lg border bg-background shadow-lg z-50">
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto divide-y">
        {limitedResults.map((result) => (
          <Link
            key={`${result.owner}/${result.name}`}
            href={`/collection/${result.owner}/${result.name}`}
            className="block p-4 hover:bg-muted/50"
            onClick={onCloseAction}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{result.name}</h3>
                <Badge variant="secondary">Collection</Badge>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {result.description}
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="size-5">
                    <AvatarFallback className="text-xs">
                      {result.owner.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{result.owner}</span>
                </div>
                <DotSeparator />
                <span>1.0.0</span>
                <DotSeparator />
                <span>3 days ago</span>
              </div>
              <div className="flex gap-2">
                {result.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {result.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{result.tags.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {hasMoreResults && (
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-between text-muted-foreground hover:text-foreground"
            onClick={onShowMoreAction}
          >
            Show all results
            <span className="flex items-center text-sm text-muted-foreground/70">
              press{" "}
              <kbd className="mx-2 px-2 py-0.5 border rounded-sm">Enter</kbd>
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}

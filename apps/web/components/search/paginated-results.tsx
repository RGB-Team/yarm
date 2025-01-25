"use client";

import { useState } from "react";
import { SearchResult } from "./search-results";
import { ResultCard } from "./result-card";
import { PaginationControls } from "./pagination-controls";

interface PaginatedResultsProps {
  results: SearchResult[];
  itemsPerPage: number;
}

export function PaginatedResults({ results, itemsPerPage }: PaginatedResultsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentResults = results.slice(startIndex, endIndex);

  return (
    <div className="w-full space-y-4">
      <div className="space-y-4 min-h-[75dvh]">
        {currentResults.map((result) => (
          <ResultCard key={`${result.owner}/${result.name}`} result={result} />
        ))}
      </div>
      
      {results.length > itemsPerPage && (
        <PaginationControls
          totalItems={results.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChangeAction={setCurrentPage}
        />
      )}
    </div>
  );
} 
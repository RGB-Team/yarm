import { Search } from "lucide-react";
import { PaginatedResults } from "./paginated-results";

export interface SearchResult {
  owner: string;
  name: string;
  description: string;
  tags: string[];
  stars: number;
  downloads: number;
  version?: string;
  updatedAt?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  isLoading?: boolean;
}

const ITEMS_PER_PAGE = 5;

export function SearchResults({ results, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center border rounded-lg p-4">
        <Search className="h-12 w-12 text-muted-foreground/40 mb-4" />
        <h3 className="text-lg font-medium mb-2">No results found</h3>
        <p className="text-sm text-muted-foreground">
          Try adjusting your search terms or explore our popular tags
        </p>
      </div>
    );
  }

  return <PaginatedResults results={results} itemsPerPage={ITEMS_PER_PAGE} />;
} 
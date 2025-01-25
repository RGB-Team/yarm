import { Suspense } from "react";
import { SearchResults } from "@/components/search/search-results";
import {
  searchCollections,
  SortOption,
  Framework,
  ContentType,
} from "@/lib/services/search-service";
import { SearchFiltersSidebar } from "@/components/search/search-filters-sidebar";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    sort?: string;
    frameworks?: string[];
    types?: string[];
    tags?: string[];
    page?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const { items: results, total } = await searchCollections({
    query: params.q || "",
    sort: params.sort as SortOption,
    frameworks: params.frameworks as Framework[],
    types: params.types as ContentType[],
    tags: params.tags,
    page: params.page ? parseInt(params.page) - 1 : 0,
    limit: 10,
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <SearchFiltersSidebar isSearchPage />

        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">
              Search Results for &quot;{(await searchParams).q}&quot;
            </h1>
            <p className="text-muted-foreground">Found {total} results</p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <SearchResults results={results} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

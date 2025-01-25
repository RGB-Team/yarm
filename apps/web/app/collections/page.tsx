import { Suspense } from "react";
import { SearchResults } from "@/components/search/search-results";
import { searchCollections } from "@/lib/services/search-service";
import { SearchFiltersSidebar } from "@/components/search/search-filters-sidebar";
import { constructMetadata } from "@/lib/metadata";
import {
  SortOption,
  Framework,
  ContentType,
} from "@/lib/services/search-service";

interface CollectionsPageProps {
  searchParams: Promise<{
    sort?: string;
    frameworks?: string[];
    types?: string[];
    tags?: string[];
    page?: string;
  }>;
}

export const metadata = constructMetadata({
  title: "Collections | YARM",
  description:
    "Browse thousands of framework-agnostic web components from the community.",
  pathname: "/collections",
});

export default async function CollectionsPage({
  searchParams,
}: CollectionsPageProps) {
  const params = await searchParams;
  const { items: results, total } = await searchCollections({
    sort: (params.sort as SortOption) || "popularity",
    frameworks: params.frameworks as Framework[],
    types: params.types as ContentType[],
    tags: params.tags,
    page: params.page ? parseInt(params.page) - 1 : 0,
    limit: 10,
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <SearchFiltersSidebar />

        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Collections</h1>
            <p className="text-muted-foreground">
              Browse through our curated list of web component collections
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <SearchResults results={results} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

import { Suspense } from "react";
import { SearchResults } from "@/components/search/search-results";
import dummyData from "@/data/dummy.json";
import { Badge } from "@yarm/ui/components/ui/badge";
import { Checkbox } from "@yarm/ui/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@yarm/ui/components/ui/radio-group";
import { Label } from "@yarm/ui/components/ui/label";
import { LineSeparator } from "@yarm/ui/components/ui/separator";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Collections | YARM",
  description: "Browse thousands of framework-agnostic web components from the community.",
  pathname: "/collections",
});

export default function CollectionsPage() {
  // Reusing the search page layout but with all collections
  const results = dummyData.collections;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Filters Sidebar - Reused from search page */}
        <aside className="w-64 flex-shrink-0">
          <div className="space-y-6">
            {/* Sort Section */}
            <div className="space-y-4">
              <h3 className="font-semibold">Sort by</h3>
              <RadioGroup defaultValue="popularity">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="popularity" id="popularity" />
                  <Label htmlFor="popularity">Popularity</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="stars" id="stars" />
                  <Label htmlFor="stars">Stars</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="updated" id="updated" />
                  <Label htmlFor="updated">Recently Updated</Label>
                </div>
              </RadioGroup>
            </div>

            <LineSeparator />

            {/* Framework Filter */}
            <div className="space-y-4">
              <h3 className="font-semibold">Framework</h3>
              <div className="space-y-2">
                {['React', 'Vue', 'Svelte', 'Web Components'].map((framework) => (
                  <div key={framework} className="flex items-center space-x-2">
                    <Checkbox id={framework} />
                    <Label htmlFor={framework}>{framework}</Label>
                  </div>
                ))}
              </div>
            </div>

            <LineSeparator />

            {/* Type Filter */}
            <div className="space-y-4">
              <h3 className="font-semibold">Type</h3>
              <div className="space-y-2">
                {['Components', 'Collections', 'Templates'].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <Label htmlFor={type}>{type}</Label>
                  </div>
                ))}
              </div>
            </div>

            <LineSeparator />

            {/* Popular Tags */}
            <div className="space-y-4">
              <h3 className="font-semibold">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['ui', 'form', 'layout', 'navigation', 'data-display'].map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
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
"use client";

import { Badge } from "@yarm/ui/components/ui/badge";
import { Checkbox } from "@yarm/ui/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@yarm/ui/components/ui/radio-group";
import { Label } from "@yarm/ui/components/ui/label";
import { LineSeparator } from "@yarm/ui/components/ui/separator";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface SearchFiltersSidebarProps {
  isSearchPage?: boolean;
}

const FRAMEWORKS = ['React', 'Vue', 'Svelte', 'Web Components'] as const;
const TYPES = ['Components', 'Collections', 'Templates'] as const;
const POPULAR_TAGS = ['ui', 'form', 'layout', 'navigation', 'data-display'] as const;

export function SearchFiltersSidebar({ isSearchPage }: SearchFiltersSidebarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const currentSort = searchParams.get('sort') || (isSearchPage ? 'relevance' : 'popularity');
  const selectedFrameworks = searchParams.getAll('frameworks');
  const selectedTypes = searchParams.getAll('types');
  const selectedTags = searchParams.getAll('tags');

  const updateParams = useCallback((params: Record<string, string | string[] | null>) => {
    const current = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) current.delete(key);
      else if (Array.isArray(value)) {
        current.delete(key);
        value.forEach(v => current.append(key, v));
      } else current.set(key, value);
    });
    router.push(`?${current.toString()}`, { scroll: false });
  }, [searchParams, router]);

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold">Sort by</h3>
          <RadioGroup value={currentSort} onValueChange={(value) => updateParams({ sort: value })}>
            {isSearchPage && (
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="relevance" id="relevance" />
                <Label htmlFor="relevance">Relevance</Label>
              </div>
            )}
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

        <div className="space-y-4">
          <h3 className="font-semibold">Framework</h3>
          <div className="space-y-2">
            {FRAMEWORKS.map((framework) => (
              <div key={framework} className="flex items-center space-x-2">
                <Checkbox 
                  id={framework}
                  checked={selectedFrameworks.includes(framework)}
                  onCheckedChange={(checked) => {
                    const newFrameworks = checked 
                      ? [...selectedFrameworks, framework]
                      : selectedFrameworks.filter(f => f !== framework);
                    updateParams({ frameworks: newFrameworks });
                  }}
                />
                <Label htmlFor={framework}>{framework}</Label>
              </div>
            ))}
          </div>
        </div>

        <LineSeparator />

        <div className="space-y-4">
          <h3 className="font-semibold">Type</h3>
          <div className="space-y-2">
            {TYPES.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={type}
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={(checked) => {
                    const newTypes = checked 
                      ? [...selectedTypes, type]
                      : selectedTypes.filter(t => t !== type);
                    updateParams({ types: newTypes });
                  }}
                />
                <Label htmlFor={type}>{type}</Label>
              </div>
            ))}
          </div>
        </div>

        <LineSeparator />

        <div className="space-y-4">
          <h3 className="font-semibold">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TAGS.map((tag) => (
              <Badge 
                key={tag} 
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => {
                  const newTags = selectedTags.includes(tag)
                    ? selectedTags.filter(t => t !== tag)
                    : [...selectedTags, tag];
                  updateParams({ tags: newTags });
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
} 
import { Badge } from "@yarm/ui/components/ui/badge";
import { Button } from "@yarm/ui/components/ui/button";
import { Copy, Github } from "lucide-react";

interface Collection {
  owner: string;
  name: string;
  description: string;
  tags: string[];
  stars: number;
  downloads: number;
}

interface CollectionSidebarProps {
  collection: Collection;
}

export function CollectionSidebar({ collection }: CollectionSidebarProps) {
  return (
    <div className="lg:w-80 space-y-6">
      {/* Install Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Install</h3>
        <div className="flex items-center gap-2 p-3 bg-card/50 border rounded-lg">
          <code className="text-sm font-mono flex-1">
            yarm install @{collection.owner}/{collection.name}
          </code>
          <Button 
            variant="ghost" 
            size="icon"
            className="size-6 hover:bg-background"
          >
            <Copy className="size-4" />
          </Button>
        </div>
      </div>

      {/* Works with Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Works with</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-[#FF3E00]/10 text-[#FF3E00] border-[#FF3E00]/20">
            Svelte
          </Badge>
          <Badge variant="outline" className="bg-[#149ECA]/10 text-[#149ECA] border-[#149ECA]/20">
            React
          </Badge>
          <Badge variant="outline" className="bg-[#42B883]/10 text-[#42B883] border-[#42B883]/20">
            Vue.js
          </Badge>
        </div>
      </div>

      {/* Repository Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Repository</h3>
        <a 
          href={`https://github.com/${collection.owner}/${collection.name}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <Github className="size-4" />
          github.com/{collection.owner}/{collection.name}
        </a>
      </div>

      {/* Tags Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {collection.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline"
              className="bg-card/50 hover:bg-card/80"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
} 
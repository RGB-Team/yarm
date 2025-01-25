import { Avatar, AvatarFallback } from "@yarm/ui/components/ui/avatar";
import { Badge } from "@yarm/ui/components/ui/badge";
import { DotSeparator } from "@yarm/ui/components/ui/separator";

interface Collection {
  owner: string;
  name: string;
  description: string;
  tags: string[];
  stars: number;
  downloads: number;
}

interface CollectionHeaderProps {
  collection: Collection;
}

export function CollectionHeader({ collection }: CollectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="size-16">
          <AvatarFallback>
            {collection.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {collection.name}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>by {collection.owner}</span>
            <DotSeparator />
            <span>Version 1.4.6</span>
            <DotSeparator />
            <span>Updated 3 days ago</span>
          </div>
        </div>
      </div>
      <p className="text-lg text-muted-foreground mb-6">
        {collection.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {collection.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
} 
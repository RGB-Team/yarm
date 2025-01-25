import { notFound } from "next/navigation";
import { Badge } from "@yarm/ui/components/ui/badge";
import { Button } from "@yarm/ui/components/ui/button";
import { DotSeparator } from "@yarm/ui/components/ui/separator";
import { Avatar, AvatarFallback } from "@yarm/ui/components/ui/avatar";
import { Search } from "lucide-react";
import dummyData from "@/data/dummy.json";
import { constructMetadata } from "@/lib/metadata";

interface PageProps {
  params: {
    owner: string;
    name: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const collection = dummyData.collections.find(
    (c) => c.owner === params.owner && c.name === params.name
  );

  if (!collection) return {};

  return constructMetadata({
    title: `${collection.name} by ${collection.owner}`,
    description: collection.description,
    pathname: `/collection/${params.owner}/${params.name}`,
  });
}

export default function CollectionPage({ params }: PageProps) {
  const collection = dummyData.collections.find(
    (c) => c.owner === params.owner && c.name === params.name
  );

  if (!collection) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="size-12">
              <AvatarFallback>
                <div className="flex items-center justify-center size-12 bg-white/10 rounded-full" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold mb-1">
                {collection.owner}/{collection.name}
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Version 1.0.0</span>
                <DotSeparator />
                <span>Updated 3 days ago</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
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

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-card border">
            <div className="text-sm text-muted-foreground mb-1">Stars</div>
            <div className="text-2xl font-bold">{collection.stars.toLocaleString()}</div>
          </div>
          <div className="p-4 rounded-lg bg-card border">
            <div className="text-sm text-muted-foreground mb-1">Downloads</div>
            <div className="text-2xl font-bold">{collection.downloads.toLocaleString()}</div>
          </div>
          <div className="p-4 rounded-lg bg-card border">
            <div className="text-sm text-muted-foreground mb-1">Components</div>
            <div className="text-2xl font-bold">12</div>
          </div>
        </div>

        {/* Installation Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Installation</h2>
          <div className="bg-card border rounded-lg p-4">
            <code className="text-sm">
              yarm install @{collection.owner}/{collection.name}
            </code>
            <Button variant="secondary" size="sm" className="ml-2">
              Copy
            </Button>
          </div>
        </div>

        {/* Components Section - Placeholder */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Placeholder for components list */}
            <div className="p-4 border rounded-lg bg-card">
              <div className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
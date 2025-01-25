import { notFound } from "next/navigation";
import { CollectionHeader } from "@/components/collection/collection-header";
import { CollectionTabs } from "@/components/collection/collection-tabs";
import { CollectionSidebar } from "@/components/collection/collection-sidebar";
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
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>home</span>
            <span>/</span>
            <span>collections</span>
            <span>/</span>
            <span>{collection.owner}</span>
            <span>/</span>
            <span className="text-foreground">{collection.name}</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <CollectionHeader collection={collection} />
            <CollectionTabs componentCount={12} />
          </div>

          {/* Sidebar */}
          <CollectionSidebar collection={collection} />
        </div>
      </main>
    </div>
  );
} 
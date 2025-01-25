"use client";

import { useState } from "react";
import { cn } from "@yarm/ui/lib/utils";
import { CollectionReadme } from "./collection-readme";
import { CollectionComponents } from "./collection-components";

type TabType = "readme" | "components";

interface CollectionTabsProps {
  componentCount: number;
}

export function CollectionTabs({ componentCount }: CollectionTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("readme");

  return (
    <>
      {/* Tab Navigation */}
      <div className="border-b mb-6">
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveTab("readme")}
            className={cn(
              "pb-2 text-sm font-medium relative",
              activeTab === "readme" ? "text-foreground" : "text-muted-foreground",
              activeTab === "readme" && "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-foreground"
            )}
          >
            Readme
          </button>
          <button
            onClick={() => setActiveTab("components")}
            className={cn(
              "pb-2 text-sm font-medium relative flex items-center gap-2",
              activeTab === "components" ? "text-foreground" : "text-muted-foreground",
              activeTab === "components" && "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-foreground"
            )}
          >
            Components
            <span className="text-xs text-muted-foreground">({componentCount})</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "readme" ? (
        <CollectionReadme />
      ) : (
        <CollectionComponents />
      )}
    </>
  );
} 
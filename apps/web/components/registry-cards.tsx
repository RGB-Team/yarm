"use client";

import { Button } from "@yarm/ui/components/ui/button";
import { useState } from "react";

interface Registry {
  owner: string;
  name: string;
  description: string;
  tags: string[];
  stars: number;
  downloads: number;
}

interface RegistryCardsProps {
  initialData: Registry[];
}

export function PopularCards({ initialData }: RegistryCardsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayCount = isExpanded ? 12 : 6;
  const data = initialData.slice(0, displayCount);

  return (
    <section className="w-full max-w-7xl pb-20 pt-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Discover Popular Registries
        </h2>
        <Button 
          variant="secondary-outline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "See All"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((registry, index) => (
          <div
            key={`${registry.owner}/${registry.name}`}
            className="p-6 rounded-lg border-[0.5] bg-card transform transition-all duration-500 ease-in-out"
            style={{
              opacity: 0,
              animation: `fadeIn 500ms ease-out forwards`,
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="flex items-center gap-0 mb-3">
              <span className="text-primary">@{registry.owner}</span>
              <span>/{registry.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {registry.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {registry.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-transparent border border-muted-foreground/20 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
} 
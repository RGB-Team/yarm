import { SearchResult } from "./search-results";
import { Card, CardContent } from "@yarm/ui/components/ui/card";
import { Badge } from "@yarm/ui/components/ui/badge";
import { DotSeparator } from "@yarm/ui/components/ui/separator";
import { Avatar, AvatarFallback } from "@yarm/ui/components/ui/avatar";
import { Search } from "lucide-react";
import { Button } from "@yarm/ui/components/ui/button";

interface ResultCardProps {
  result: SearchResult;
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <Card>
      <CardContent className="flex items-start gap-5 p-6">
        <div className="flex-1 space-y-3 w-full">
          <h3 className="text-lg font-semibold">{result.name}</h3>
          <p className="truncate max-w-[15rem] w-full text-white/70 text-sm">
            {result.description}
          </p>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-3">
              <Avatar className="size-6">
                <AvatarFallback>
                  <div className="flex items-center justify-center size-6 bg-white rounded-full" />
                </AvatarFallback>
              </Avatar>
              <p>{result.owner}</p>
            </div>
            <DotSeparator />
            <span aria-label="version" className="tracking-widest">
              {result.version || "1.0.0"}
            </span>
            <DotSeparator />
            <span
              aria-label="last-time-update"
              className="truncate max-w-fit w-full"
            >
              3 days ago
            </span>
          </div>
          <div aria-label="tags" className="space-x-2">
            {result.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" rounded="pill">
                {tag}
              </Badge>
            ))}
            {result.tags.length > 2 && (
              <Badge variant="outline" rounded="pill">
                +{result.tags.length - 2}
              </Badge>
            )}
          </div>
        </div>
        <div className="space-y-2 flex flex-col justify-start">
          <Badge variant="secondary" className="w-fit">
            Collection
          </Badge>
          <div className="flex gap-2 justify-end">
            <Button
              size="icon"
              variant="default-secondary"
              className="size-7"
            >
              <Search className="size-4" />
            </Button>
            <Button
              size="icon"
              variant="default-secondary"
              className="size-7"
            >
              <Search className="size-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
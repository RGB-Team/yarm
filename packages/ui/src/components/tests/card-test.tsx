import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@yarm/ui/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@yarm/ui/components/ui/avatar";
import { DotSeparator } from "@yarm/ui/components/ui/separator";
import { Badge } from "@yarm/ui/components/ui/badge";
import { Button } from "@yarm/ui/components/ui/button";
import { Search } from "lucide-react";

const CardTest = () => {
  const tagsLength = 3;
  return (
    <Card>
      <CardContent className="flex items-start gap-5">
        <div className="flex-1 space-y-3 w-full">
          <CardTitle className="">Shadcn Extension</CardTitle>
          <CardDescription className="truncate max-w-[15rem] w-full text-white/70 text-sm">
            Shadcn is a tool for creating shadows for your design. It's
            available in Sketch, Figma, and Adobe XD. With Shadcn you can create
            a shadow for your design in a few clicks.
          </CardDescription>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-3">
              <Avatar className="size-6">
                <AvatarImage src="" alt="" />
                <AvatarFallback>
                  <div className="flex items-center justify-center size-6 bg-white rounded-full" />
                </AvatarFallback>
              </Avatar>
              <p>bylka_yerfa</p>
            </div>
            <DotSeparator />
            <span aria-label="version" className="tracking-widest">
              1.4.6
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
            {Array.from({ length: tagsLength }).map((_, index) =>
              index <= 1 ? (
                <Badge key={index} variant="outline" rounded={"pill"}>
                  shadcn
                </Badge>
              ) : (
                <Badge key={index} variant="outline" rounded={"pill"}>
                  +{tagsLength - 2}
                </Badge>
              )
            )}
          </div>
        </div>
        <div className="space-y-2 flex flex-col justify-start">
          <Badge variant="secondary" className="w-fit">
            Collection
          </Badge>
          <div className="flex gap-2 justify-end">
            {Array.from({ length: 2 }).map((_, index) => (
              <Button
                key={`${index}-framework-button`}
                size={"icon"}
                variant={"default-secondary"}
                className="size-7"
              >
                <Search />
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { CardTest };

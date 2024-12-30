"use client";

import { Input } from "@yarm/ui/components/ui/input";
import { Button } from "@yarm/ui/components/ui/button";
import { Key } from "@yarm/ui/components/ui/key";
import { Form, FormField, FormItem } from "@yarm/ui/components/ui/form";
import { Search, SearchX } from "lucide-react";
import { SearchSchema, SearchType } from "@yarm/ui/validators/search-validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  Tags,
  TagsContent,
  TagsGroup,
  TagsHeader,
  TagsInput,
  TagsInputWrapper,
  TagsItem,
  TagsList,
} from "@yarm/ui/components/ui/tags-input";
import { Badge } from "@yarm/ui/components/ui/badge";
import { DotSeparator } from "@yarm/ui/components/ui/separator";

const SearchCommand = ({
  ref,
}: {
  ref?: React.RefObject<HTMLInputElement | null>;
}) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  const form = useForm<SearchType>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: SearchType) => {
    console.log(data);
  };

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "/") {
        e.preventDefault();
        ref?.current?.focus();
      }
    },
    []
  );

  return (
    <div
      onKeyDown={handleKeyDown}
      ref={divRef}
      className="flex-1 max-w-2xl flex items-center rounded-lg overflow-hidden border border-input focus:border-green-500 focus-within:border-green-500"
    >
      <div className="flex-1 relative">
        <Input
          ref={ref}
          placeholder="Search components, registries..."
          className="w-full rounded-none indent-4 pr-8 ring-offset-transparent placeholder:text-muted-foreground/50 caret-primary peer ring-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          onClick={() => divRef.current?.focus()}
        />
        <div className="absolute h-full right-0 pr-2 transform top-1/2 -translate-y-1/2 flex items-center text-sm text-muted-foreground/70 peer-focus:opacity-0 transition-opacity duration-200">
          <span className="text-sm">
            Type
            <Key>/</Key>
            to search
          </span>
        </div>
      </div>
      <Button
        type="submit"
        size={"icon"}
        className="rounded-none !px-6 bg-primary"
      >
        <Search className="text-white" />
      </Button>
    </div>
  );
};

const KEYWORDS = ["author", "tags", "version", "collection"];

const SearchCommandForm = () => {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Tags value={value} onValueChange={setValue}>
      <TagsInputWrapper className="w-full">
        <TagsInput placeholder="Something here" />
      </TagsInputWrapper>
      <TagsList>
        <TagsHeader className="space-y-2">
          <h4 className="text-white/80 text-xsm">Search Options</h4>
          <div className="flex gap-[0.625rem] ">
            {KEYWORDS.map((keyword) => (
              <Badge
                key={keyword}
                className="h-7 text-xsm text-primary/90 tracking-widest cursor-pointer"
                variant={"secondary"}
              >
                {keyword}:
              </Badge>
            ))}
          </div>
        </TagsHeader>
        <TagsContent>
          <TagsGroup heading={"Results"}>
            <TagsItem className="flex items-center justify-between">
              <div>
                <h4 className="text-md font-medium">shadcn extension</h4>
                <p className="text-white/80 text-xs flex items-center gap-[0.375rem]">
                  <span className="tracking-widest">0.5.0</span>
                  <DotSeparator className="bg-white/80" />
                  <span>Extend your own ui</span>
                </p>
              </div>
              <div className="flex items-center gap-[0.375rem]">
                <Button size="icon" variant="secondary" className="size-7">
                  <SearchX />
                </Button>
                <Button size="icon" variant="secondary" className="size-7">
                  <SearchX />
                </Button>
                <Badge variant="secondary" className="h-7">
                  collection
                </Badge>
              </div>
            </TagsItem>
          </TagsGroup>
        </TagsContent>
      </TagsList>
    </Tags>
  );
};

export { SearchCommand, SearchCommandForm };

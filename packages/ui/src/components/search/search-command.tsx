"use client";

import { Input } from "@yarm/ui/components/ui/input";
import { Button } from "@yarm/ui/components/ui/button";
import { Key } from "@yarm/ui/components/ui/key";
import { Form, FormField, FormItem } from "@yarm/ui/components/ui/form";
import { Search } from "lucide-react";
import { SearchSchema, SearchType } from "@yarm/ui/validators/search-validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  Tags,
  TagsInput,
  TagsInputWrapper,
  TagsList,
} from "@yarm/ui/components/ui/tags-input";

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

const SearchCommandForm = () => {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Tags value={value} onValueChange={setValue}>
      <TagsInputWrapper>
        <TagsInput placeholder="Something here" />
      </TagsInputWrapper>
      <TagsList></TagsList>
    </Tags>
  );
};

export { SearchCommand, SearchCommandForm };

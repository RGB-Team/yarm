"use client";

import { Badge } from "@yarm/ui/components/ui/badge";
import { Input } from "@yarm/ui/components/ui/input";
import { cn } from "@yarm/ui/lib/utils";
import { X as RemoveIcon } from "lucide-react";
import React from "react";

/**
 * used for identifying the split char and use will pasting
 */
const SPLITTER_REGEX = /[\n#?=&\t,./-]+/;

/**
 * used for formatting the pasted element for the correct value format to be added
 */

const FORMATTING_REGEX = /^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g;

interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string[];
  onValueChange: (value: string[]) => void;
  placeholder?: string;
  maxItems?: number;
  minItems?: number;
}

interface TagsContextProps {
  value: string[];
  onValueChange: (value: any) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  RemoveValue: (val: string) => void;
  disableInput: boolean;
  disableButton: boolean;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  open: boolean;
}

const TagInputContext = React.createContext<TagsContextProps | null>(null);

const useTags = () => {
  const context = React.useContext(TagInputContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};

const Tags = React.forwardRef<HTMLDivElement, TagsProps>(
  (
    {
      children,
      value,
      onValueChange,
      placeholder,
      maxItems,
      minItems,
      className,
      dir,
      ...props
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = React.useState(-1);
    const [inputValue, setInputValue] = React.useState("");
    const [disableInput, setDisableInput] = React.useState(false);
    const [disableButton, setDisableButton] = React.useState(false);
    const [isValueSelected, setIsValueSelected] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const parseMinItems = minItems ?? 0;
    const parseMaxItems = maxItems ?? Infinity;

    const onValueChangeHandler = React.useCallback(
      (val: string) => {
        if (!value.includes(val) && value.length < parseMaxItems) {
          onValueChange([...value, val]);
        }
      },
      [value]
    );

    const RemoveValue = React.useCallback(
      (val: string) => {
        if (value.includes(val) && value.length > parseMinItems) {
          onValueChange(value.filter((item) => item !== val));
        }
      },
      [value]
    );

    const handlePaste = React.useCallback(
      (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const tags = e.clipboardData.getData("text").split(SPLITTER_REGEX);
        const newValue = [...value];
        tags.forEach((item) => {
          const parsedItem = item.replaceAll(FORMATTING_REGEX, "").trim();
          if (
            parsedItem.length > 0 &&
            !newValue.includes(parsedItem) &&
            newValue.length < parseMaxItems
          ) {
            newValue.push(parsedItem);
          }
        });
        onValueChange(newValue);
        setInputValue("");
      },
      [value]
    );

    const handleSelect = React.useCallback(
      (e: React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        const selection = target.value.substring(
          target.selectionStart ?? 0,
          target.selectionEnd ?? 0
        );

        setSelectedValue(selection);
        setIsValueSelected(selection === inputValue);
      },
      [inputValue]
    );

    // ? suggest : a refactor rather then using a useEffect

    React.useEffect(() => {
      const VerifyDisable = () => {
        if (value.length - 1 >= parseMinItems) {
          setDisableButton(false);
        } else {
          setDisableButton(true);
        }
        if (value.length + 1 <= parseMaxItems) {
          setDisableInput(false);
        } else {
          setDisableInput(true);
        }
      };
      VerifyDisable();
    }, [value]);

    // ? check: Under build , default option support
    // * support : for the uncontrolled && controlled input pattern

    /*  React.useEffect(() => {
      if (!defaultOptions) return;
      onValueChange([...value, ...defaultOptions]);
    }, []); */

    const handleKeyDown = React.useCallback(
      async (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();

        const moveNext = () => {
          const nextIndex =
            activeIndex + 1 > value.length - 1 ? -1 : activeIndex + 1;
          setActiveIndex(nextIndex);
        };

        const movePrev = () => {
          const prevIndex =
            activeIndex - 1 < 0 ? value.length - 1 : activeIndex - 1;
          setActiveIndex(prevIndex);
        };

        const moveCurrent = () => {
          const newIndex =
            activeIndex - 1 <= 0
              ? value.length - 1 === 0
                ? -1
                : 0
              : activeIndex - 1;
          setActiveIndex(newIndex);
        };
        const target = e.currentTarget;

        switch (e.key) {
          case "ArrowLeft":
            if (dir === "rtl") {
              if (value.length > 0 && activeIndex !== -1) {
                moveNext();
              }
            } else {
              if (value.length > 0 && target.selectionStart === 0) {
                movePrev();
              }
            }
            break;

          case "ArrowRight":
            if (dir === "rtl") {
              if (value.length > 0 && target.selectionStart === 0) {
                movePrev();
              }
            } else {
              if (value.length > 0 && activeIndex !== -1) {
                moveNext();
              }
            }
            break;

          case "Backspace":
          case "Delete":
            if (value.length > 0) {
              if (activeIndex !== -1 && activeIndex < value.length) {
                RemoveValue(value[activeIndex] as string);
                moveCurrent();
              } else {
                if (target.selectionStart === 0) {
                  if (selectedValue === inputValue || isValueSelected) {
                    RemoveValue(value[value.length - 1] as string);
                  }
                }
              }
            }
            break;

          case "Escape":
            const newIndex = activeIndex === -1 ? value.length - 1 : -1;
            setActiveIndex(newIndex);
            break;

          case "Enter":
            if (inputValue.trim() !== "") {
              e.preventDefault();
              onValueChangeHandler(inputValue);
              setInputValue("");
            }
            break;
        }
      },
      [activeIndex, value, inputValue, RemoveValue]
    );

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
      },
      []
    );

    return (
      <TagInputContext.Provider
        value={{
          value,
          onValueChange,
          inputValue,
          setInputValue,
          activeIndex,
          setActiveIndex,
          RemoveValue,
          disableInput,
          disableButton,
          handleKeyDown,
          handleChange,
          handlePaste,
          handleSelect,
          open,
        }}
      >
        <div className={cn(className, "overflow-visible")} {...props}>
          {children}
        </div>
      </TagInputContext.Provider>
    );
  }
);

Tags.displayName = "Tags";

const TagsInputWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { activeIndex, value, RemoveValue, disableButton } = useTags();

  const mousePreventDefault = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        "flex items-center flex-wrap gap-1 p-1 rounded-lg bg-background ring-1 ring-muted overflow-hidden",
        {
          "focus-within:ring-ring": activeIndex === -1,
        },
        className
      )}
    >
      {value.map((item, index) => (
        <Badge
          tabIndex={activeIndex !== -1 ? 0 : activeIndex}
          key={item}
          aria-disabled={disableButton}
          data-active={activeIndex === index}
          className={cn(
            "relative px-1 rounded flex items-center gap-1 data-[active='true']:ring-2 data-[active='true']:ring-muted-foreground truncate aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
          )}
          variant={"secondary"}
        >
          <span className="text-xs">{item}</span>
          <button
            type="button"
            aria-label={`Remove ${item} option`}
            aria-roledescription="button to remove option"
            disabled={disableButton}
            onMouseDown={mousePreventDefault}
            onClick={() => RemoveValue(item)}
            className="disabled:cursor-not-allowed"
          >
            <span className="sr-only">Remove {item} option</span>
            <RemoveIcon className="h-4 w-4 hover:stroke-destructive" />
          </button>
        </Badge>
      ))}
      {children}
    </div>
  );
});

TagsInputWrapper.displayName = "TagsInputWrapper";

const TagsInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const {
    activeIndex,
    disableInput,
    setActiveIndex,
    handleChange,
    handleKeyDown,
    handlePaste,
    handleSelect,
    inputValue,
  } = useTags();

  return (
    <Input
      {...props}
      ref={ref}
      tabIndex={0}
      aria-label="input tag"
      disabled={disableInput}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      value={inputValue}
      onSelect={handleSelect}
      onChange={activeIndex === -1 ? handleChange : undefined}
      onClick={() => setActiveIndex(-1)}
      className={cn(
        "outline-0 border-none h-7 min-w-fit flex-1 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-0 placeholder:text-muted-foreground px-1",
        activeIndex !== -1 && "caret-transparent",
        className
      )}
    />
  );
});

TagsInput.displayName = "TagsInput";

type TagsListProps = React.HTMLAttributes<HTMLDivElement>;

const TagsList = React.forwardRef<HTMLDivElement, TagsListProps>(
  ({ className, children, ...props }, ref) => {
    const { open } = useTags();
    return (
      <div ref={ref} className={cn("relative")}>
        {open && (
          <div className={cn("absolute inset-0", className)} {...props}>
            {children}
          </div>
        )}
      </div>
    );
  }
);

TagsList.displayName = "TagsList";

const TagsHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return <div ref={ref} className={cn("", className)} {...props}></div>;
});

const TagsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return <div ref={ref} className={cn("", className)} {...props}></div>;
});

const TagsGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    heading: string;
  }
>(({ className, heading, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      <h4 className="ml-4">{heading}</h4>
      {children}
    </div>
  );
});

const TagsItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("border-t border-input")}>
      <div ref={ref} className={cn("ml-4", className)} {...props}>
        {children}
      </div>
    </div>
  );
});

const TagsEmpty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2 justify-center", className)}
      {...props}
    >
      {children}
    </div>
  );
});

export {
  Tags,
  TagsInput,
  TagsInputWrapper,
  TagsList,
  TagsHeader,
  TagsContent,
  TagsGroup,
  TagsItem,
  TagsEmpty,
};

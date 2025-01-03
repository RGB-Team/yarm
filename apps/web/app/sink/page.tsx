import { ShowCard } from "@yarm/ui/components/show-card";
import {
  SearchCommand,
  SearchCommandForm,
} from "@yarm/ui/components/search/search-command";
import { Button } from "@yarm/ui/components/ui/button";
import { Badge } from "@yarm/ui/components/ui/badge";
import { CardTest } from "@yarm/ui/components/tests/card-test";

const Registry = [
  {
    title: "Typography",
    children: [
      {
        title: "Text",
        className: "flex-col-reverse gap-2",
        elements: [
          <p className="text-2xl">Text 2xl</p>,
          <p className="text-lg">Text lg</p>,
          <p className="text-base">Text base</p>,
          <p className="text-md">Text md</p>,
          <p className="text-sm">Text sm</p>,
          <p className="text-xsm">Text xsm</p>,
          <p className="text-xs">Text xs</p>,
        ],
      },
    ],
  },
  {
    title: "Components",
    children: [
      {
        title: "Button",
        className: "flex items-center justify-center gap-2",
        elements: [
          <Button>Button</Button>,
          <Button variant="default-secondary">Button</Button>,
          <Button variant="secondary">Button</Button>,
          <Button variant="destructive">Button</Button>,
          <Button variant="default-outline">Button</Button>,
          <Button variant="secondary-outline">Button</Button>,
          <Button variant="link">Button</Button>,
        ],
      },
      {
        title: "Badge",
        className: "flex items-center justify-center gap-2",
        elements: [
          <Badge>Badge</Badge>,
          <Badge variant="secondary">Badge</Badge>,
          <Badge variant="outline">Badge</Badge>,
          <Badge variant="destructive">Badge</Badge>,
        ],
      },
      {
        title: "Card",
        className: "",
        elements: [<CardTest />],
      },
      {
        title: "Search",
        className: "",
        elements: [<SearchCommandForm />],
      },
    ],
  },
] satisfies {
  title: string;
  children: {
    title: string;
    className: string;
    elements: React.ReactNode[];
  }[];
}[];

export default function SinkPage() {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <div className="space-y-4 p-2 pt-4">
      <h1 className="text-2xl font-bold text-center text-primary capitalize">
        Yarm design system
      </h1>
      <p className="text-gray-400 text-center ">
        This page is used to showcase the design system components and styles.
      </p>
      {Registry.map((section) => (
        <div key={section.title} className="space-y-2">
          <h3 className="text-lg text-primary">{section.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
            {section.children.map((child) => {
              return (
                <ShowCard title={child.title} className={child.className}>
                  <>
                    {child.elements.map((element, i) => (
                      <div key={`${i}-button`}>{element}</div>
                    ))}
                  </>
                </ShowCard>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

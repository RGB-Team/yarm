import { Card, CardContent, CardHeader } from "@yarm/ui/components/ui/card";
import { cn } from "@yarm/ui/lib/utils";

type ShowCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const ShowCard = ({ title, children, className }: ShowCardProps) => {
  return (
    <Card className="p-0">
      <CardHeader className="border-b px-2 py-1">{title}</CardHeader>
      <CardContent
        className={cn(
          "px-1 py-2 flex justify-center items-center gap-2 flex-wrap",
          className
        )}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export { ShowCard };

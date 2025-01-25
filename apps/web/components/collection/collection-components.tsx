import { Badge } from "@yarm/ui/components/ui/badge";

export function CollectionComponents() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div 
          key={index}
          className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">Button</h3>
              <Badge variant="outline" className="text-xs">
                v1.0.0
              </Badge>
            </div>
            <Badge variant="secondary">Component</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            A button component with various styles and states.
          </p>
        </div>
      ))}
    </div>
  );
} 
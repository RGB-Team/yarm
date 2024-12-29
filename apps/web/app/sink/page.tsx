import { ShowCard } from "@yarm/ui/components/show-card";
import {
  SearchCommand,
  SearchCommandForm,
} from "@yarm/ui/components/search/search-command";
import { Button } from "@yarm/ui/components/ui/button";

export default function SinkPage() {
  return (
    <div className="grid grid-cols-3 gap-2 p-3">
      <ShowCard title={"search command"}>
        <SearchCommandForm />
      </ShowCard>
      <ShowCard title="button">
        <Button>Publish to YARM</Button>
        <Button>Publish to YARM</Button>
        <Button>Publish to YARM</Button>
        <Button>Publish to YARM</Button>
        <Button>Publish to YARM</Button>
      </ShowCard>
    </div>
  );
}

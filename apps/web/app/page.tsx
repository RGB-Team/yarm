import { Button } from "@yarm/ui/components/ui/button";
import { Input } from "@yarm/ui/components/ui/input";
import { Search } from "lucide-react";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/footer";
import { GridPattern } from "@/components/grid-pattern";
import { GithubIcon } from "@/components/icons/github";
import { PopularCards } from "@/components/registry-cards";
import dummyData from "@/data/dummy.json";

function sortByPopularity(registries: typeof dummyData.registries) {
  return [...registries].sort((a, b) => b.stars - a.stars);
}

export default function Home() {
  const sortedData = sortByPopularity(dummyData.registries);

  return (
    <>
      <div className="relative">
        <GridPattern />
        <main className="flex min-h-screen flex-col items-center px-4">
          <section className="flex flex-col items-center text-center max-w-4xl pt-20 pb-16">
            <div className="mb-8">
              <Logo />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-4">
              <strong>
                Framework-Agnostic Web Components Registry for the Modern Web.
              </strong>
            </h1>
            <p className="text-lg text-muted-foreground/70 mb-8">
              Browse thousands of framework-agnostic web components from the
              community. Share your creations and integrate others&apos;
              components with simple commands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
              <Button
                size="default"
                className="sm:w-1/4 bg-primary font-mono text-sm"
                variant="default"
              >
                <GithubIcon className="w-6 h-6 mr-1" />
                Sign in
              </Button>
              <div className="relative sm:w-2/3">
                <Input
                  placeholder="Search components, registries..."
                  className="pr-10 h-11 w-full border bg-white/10 placeholder:text-muted-foreground/50"
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-sm text-muted-foreground/70">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-black/10"
                  >
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/70" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <PopularCards initialData={sortedData} />
        </main>
        <Footer />
      </div>
    </>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/footer";
import { GridPattern } from "@/components/grid-pattern";
import { GithubIcon } from "@/components/icons/github";
import { Code } from "@yarm/ui/code";

export default function Home() {
  return (
    <>
      <Code>{`Hey there! This is a code block!`}</Code>
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
                  <Button variant="ghost" size="icon" className="bg-black/10">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/70" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full max-w-7xl pb-20 pt-20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Discover Popular Registries
              </h2>
              <Button variant="ghost">See All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border-[0.5] border-muted-foreground/20 bg-card"
                  >
                    <div className="flex items-center gap-0 mb-3">
                      <span className="text-primary">@bylka</span>
                      <span>/shadcn-date-picker</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      A dart implementation of the famous javascript library
                      &apos;jsonwebtoken&apos; (JWT).
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-transparent border border-muted-foreground/20 text-xs">
                        shadcn
                      </span>
                      <span className="px-3 py-1 rounded-full bg-transparent border border-muted-foreground/20 text-xs">
                        date-picker
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

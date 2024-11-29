import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Command } from "lucide-react"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import { GridPattern } from "@/components/grid-pattern"

export default function Home() {
  return (
    <>
      <div className="relative">
        <GridPattern />
        <main className="flex min-h-screen flex-col items-center px-4">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center max-w-4xl pt-20 pb-16">
            <div className="mb-8">
              <Logo />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-4">
              Framework-Agnostic Web Components Registry for the Modern Web.
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Browse thousands of framework-agnostic web components from the community. Share your creations and
              integrate others' components with simple commands.
            </p>
            
            {/* CTA and Search */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
              <Button size="lg" className="sm:w-1/3">
                Get Started
              </Button>
              <div className="relative sm:w-2/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search components, registries..." 
                  className="pl-10 pr-10 h-11 w-full"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-sm text-muted-foreground">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Registries Section */}
          <section className="w-full max-w-7xl mb-20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Discover Popular Registries</h2>
              <Button variant="ghost">See All</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="p-6 rounded-lg border bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary">@bylka</span>
                    <span>/shadcn-date-picker</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    A dart implementation of the famous javascript library 'jsonwebtoken' (JWT).
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-secondary text-xs">shadcn</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-xs">date-picker</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

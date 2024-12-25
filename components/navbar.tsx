import Link from "next/link"
import { Logo } from "./logo"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { GithubIcon } from "./icons/github"
import { SheetIcon } from "./icons/sheet"
import { BlogIcon } from "./icons/blog"
import { Search } from "lucide-react"


export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left section with logo */}
          <div className="flex items-center gap-4">
              <Logo className="h-6" />
          </div>

          {/* Center section with search */}
          <div className="flex-1 mx-4 max-w-2xl">
            <div className="relative group">
              <Input
                type="search"
                placeholder="Search components, registries..."
                className="w-full pl-4 pr-8 bg-white/10 backdrop-blur-md placeholder:text-muted-foreground/50 peer"
              />
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-sm text-muted-foreground/70 peer-focus:opacity-0 transition-opacity duration-200">
                <span>
                    Type 
                    <kbd className="pointer-events-none text-sm border border-muted-foreground/20 rounded-sm px-1 mx-2 py-0.5">
                        /
                    </kbd>
                    to search
                </span>
                <Button variant="ghost" size="icon" className="bg-black/10">
                    <Search className="text-muted-foreground/70" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right section with navigation */}
          <nav className="flex items-center gap-4">
            <div className="flex items-center gap-3">
                <BlogIcon className="w-4 h-4" />
                <Link
                    // href="/blog"
                    href="#"
                    className="text-lg font-medium text-muted-foreground hover:text-foreground"
                >
                    Blog
                </Link>
            </div>
            
            <div className="flex items-center gap-3">
                <SheetIcon className="w-4 h-4" />
                <Link
                // href="#"
                href="/docs"
                className="text-lg font-medium text-muted-foreground hover:text-foreground"
                >
                Docs
                </Link>
            </div>

            <Button className="flex items-center gap-2 text-secondary bg-card">
                <GithubIcon className="w-4 h-4 fill-secondary" />
                <Link
                    href="#"
                    // href="/sign-in"
                    className="text-lg font-medium text-secondary"
                >
                    Sign in
                </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 
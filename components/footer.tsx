import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Framework-Agnostic Web Components<br />
              Registry for the Modern Web.
            </p>
          </div>

          <div className="flex gap-20">
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://github.com/yarm-org" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/yarm_org" className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter (X)
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/yarm" className="text-sm text-muted-foreground hover:text-foreground">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
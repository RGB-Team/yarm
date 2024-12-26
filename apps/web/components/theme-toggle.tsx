"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isRotating, setIsRotating] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setIsRotating(true)
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }, 250) // Half of the animation duration
    setTimeout(() => {
      setIsRotating(false)
    }, 500)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10"
        onClick={toggleTheme}
      >
        <div className={`relative h-[1.2rem] w-[1.2rem] ${isRotating ? 'animate-spin' : ''}`}>
          <Sun 
            className={`absolute top-0 left-0 transition-opacity duration-500
              ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
          />
          <Moon 
            className={`absolute top-0 left-0 transition-opacity duration-500
              ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
} 
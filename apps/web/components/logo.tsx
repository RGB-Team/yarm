import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className,width = 100, height = 40 }: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/brand/yarm-logo-full.svg"
        alt="Yarm"
        width={width}
        height={height}
        priority
        className={cn("h-10 w-auto", className)}
      />
    </Link>
  )
} 
import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/brand/yarm-logo-full.svg"
        alt="Yarm"
        width={120}
        height={40}
        priority
        className="h-10 w-auto"
      />
    </Link>
  )
} 
import { cn } from "@yarm/ui/lib/utils"

type BlogIconProps = {
    className?: string
} & React.SVGProps<SVGSVGElement>

export function BlogIcon({ className, ...props }: BlogIconProps) {
    return (
        <svg className={cn("w-4 h-4 fill-inherit", className)} {...props} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 12 12">
            <path d="M5.625 12.375h4.5v-.75h-4.5v.75Zm0-3h6.75v-.75h-6.75v.75Zm0-3h6.75v-.75h-6.75v.75ZM4.212 15c-.346 0-.634-.116-.865-.347A1.173 1.173 0 0 1 3 13.788V4.212c0-.346.116-.634.347-.865.231-.231.52-.347.865-.347h9.576c.346 0 .634.116.865.347.231.231.347.52.347.865v9.576c0 .346-.116.634-.347.865-.231.231-.52.347-.865.347H4.212Zm0-.75h9.576a.441.441 0 0 0 .318-.144.441.441 0 0 0 .144-.318V4.212a.441.441 0 0 0-.144-.318.441.441 0 0 0-.318-.144H4.212a.441.441 0 0 0-.318.144.441.441 0 0 0-.144.318v9.576c0 .116.048.222.144.318a.441.441 0 0 0 .318.144Z" fill="#fff"/>
        </svg>
    )
}

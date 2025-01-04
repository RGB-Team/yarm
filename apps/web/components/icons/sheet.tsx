import { cn } from "@yarm/ui/lib/utils"

type SheetIconProps = {
    className?: string
} & React.SVGProps<SVGSVGElement>

export function SheetIcon({ className, ...props }: SheetIconProps) {
    return (
        // <svg className={cn("w-4 h-4 fill-inherit", className)} {...props} width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v16.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h12.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V7.5L15.5 2z" />
        //     <path d="M15 3v5h5" />
        //     <path d="M10 13h8" />
        //     <path d="M10 17h8" />
        //     <path d="M10 9h3" />
        // </svg>
        <svg className={cn("w-4 h-4 fill-inherit", className)} {...props} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0.73 0.25 10.52 13.5"><path d="M3.288 7.23h5.424v-.75H3.288v.75Zm0 2.078h5.424v-.75H3.288v.75Zm0 2.077h3.174v-.75H3.288v.75ZM1.962 13.75c-.346 0-.634-.116-.865-.347a1.173 1.173 0 0 1-.347-.865V1.462c0-.346.116-.634.347-.865.231-.231.52-.347.865-.347h5.913l3.375 3.375v8.913c0 .346-.116.634-.347.865-.231.231-.52.347-.865.347H1.962ZM7.5 4V1H1.962a.441.441 0 0 0-.318.144.441.441 0 0 0-.144.318v11.076c0 .116.048.222.144.318a.441.441 0 0 0 .318.144h8.076a.441.441 0 0 0 .318-.144.441.441 0 0 0 .144-.318V4h-3Z" fill="#fff"></path></svg>
    )
}


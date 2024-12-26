export function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <div 
        className="absolute h-full w-full"
        style={{
          backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px),
                           linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
} 
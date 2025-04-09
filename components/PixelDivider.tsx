interface PixelDividerProps {
  inverted?: boolean
}

function PixelDivider({ inverted = false }: PixelDividerProps) {
  return (
    <div className="w-full h-8 relative overflow-hidden">
      <div className={`absolute w-full h-8 ${inverted ? "bg-[#0f172a]" : "bg-[#1e293b]"}`}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute bottom-0 w-8 h-8 ${inverted ? "bg-[#1e293b]" : "bg-[#0f172a]"}`}
            style={{ left: `${i * 8}%` }}
          />
        ))}
      </div>
    </div>
  )
}


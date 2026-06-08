import Image from "next/image"
import Link from "next/link"
import type { Work } from "@/lib/works"

const statusColor: Record<Work["status"], string> = {
  RECOVERED: "text-green",
  CORRUPTED: "text-warn",
  PARTIAL: "text-blue",
  QUARANTINED: "text-warn",
}

export function ArtifactCard({ work, idx }: { work: Work; idx: number }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="glitch corrupt group block win"
      style={{ transform: `rotate(${work.rot}deg)` }}
    >
      <div className="win-bar flex items-center justify-between px-1.5 py-0.5">
        <span className="truncate font-mono text-[10px] font-bold">
          {String(idx + 1).padStart(2, "0")}_{work.filename}
        </span>
        <span className="font-mono text-[9px]">[ x ]</span>
      </div>

      <div className="p-1.5">
        <div className="relative aspect-[3/4] overflow-hidden border-2 border-dirt crt">
          <Image
            src={work.src || "/placeholder.svg"}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
          />
          {/* corrupted scan bar that appears on hover */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute left-0 right-0 top-1/2 h-3 bg-warn/40 mix-blend-difference" />
            <div className="absolute left-0 right-0 top-[30%] h-1 bg-blue/50 mix-blend-screen" />
          </div>
        </div>

        <div className="mt-1.5 inset3d bg-popover p-1.5">
          <p className="font-mono text-[11px] font-bold leading-tight text-foreground chromatic">
            {work.title}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[9px] text-muted-foreground">
            <span className={statusColor[work.status]}>● {work.status}</span>
            <span>{work.bytes}</span>
            <span>{work.dims}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {work.tags.slice(0, 3).map((t) => (
              <span key={t} className="bg-secondary px-1 font-mono text-[8px] text-secondary-foreground">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

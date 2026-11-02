import Link from "next/link"
import type { ReactNode } from "react"

const links = [
  ["HOME", "/"],
  ["PROFILE", "/profile"],
  ["HOBBIES + INTERESTS", "/hobbies"],
  ["GALLERY", "/gallery"],
] as const

export function SiteNav() {
  return (
    <nav aria-label="Main navigation" className="retro-nav sticky top-0 z-50 flex flex-wrap items-center gap-1 border-b-2 border-black bg-[#c0c0c0] p-1 font-mono text-[11px] text-black shadow-[0_2px_0_#fff]">
      <span className="mr-2 bg-[#000080] px-2 py-1 font-bold text-white">JCBV.EXE</span>
      {links.map(([label, href]) => (
        <Link key={href} href={href} className="retro-button px-2 py-1 font-bold hover:bg-[#000080] hover:text-white">
          {`[ ${label} ]`}
        </Link>
      ))}
      <span className="ml-auto hidden px-2 py-1 text-[#404040] sm:inline">status: online // 56k</span>
    </nav>
  )
}

export function RetroShell({ children }: { children: ReactNode }) {
  return <main className="retro-page min-h-screen bg-[#160d1f] text-[#f3e8ff]"><SiteNav />{children}</main>
}

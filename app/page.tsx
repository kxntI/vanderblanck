import Link from "next/link"
import { ArtifactCard } from "@/components/artifact-card"
import { DragWindow } from "@/components/drag-window"
import { ARTIST, EMAIL, TAGLINE, works } from "@/lib/works"

export default function Page() {
  return (
    <main className="crt relative min-h-screen overflow-x-hidden">
      {/* top error/status bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between gap-2 border-b-2 border-dirt bg-primary px-2 py-1 font-mono text-[11px] text-primary-foreground">
        <span className="blink text-warn">● REC</span>
        <span className="truncate">{"C:\\ARCHIVE\\JCBV\\ — 4 artifacts recovered — integrity 61%"}</span>
        <span className="hidden sm:inline">20XX.XX.XX</span>
      </div>

      {/* scrolling marquee */}
      <div className="overflow-hidden border-b-2 border-dirt bg-warn py-0.5">
        <div className="marquee flex w-max whitespace-nowrap font-mono text-[11px] font-bold text-white">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="px-4">
              {
                "x WARNING: this archive is unstable x files may corrupt on view x do not trust the mirror x forget about me x WE ARE ONE x seen this angel x"
              }
              &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* glitched masthead */}
      <header className="relative border-b-2 border-dirt px-3 pb-6 pt-5">
        <div className="halftone pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative">
          <p className="font-mono text-[11px] text-muted-foreground">
            {"// post-internet archive — corrupted recovery build"}
          </p>
          <h1
            className="chromatic mt-1 font-display text-[15vw] leading-[0.82] tracking-tight text-foreground sm:text-7xl md:text-8xl"
            style={{ textShadow: "3px 0 var(--blue), -3px 0 var(--warn)" }}
          >
            JCBV_ARCHIVE
          </h1>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
            <p className="font-mono text-xs text-foreground">
              <span className="bg-primary px-1 text-primary-foreground">{ARTIST}</span>{" "}
              <span className="font-hand text-blue">&ldquo;{TAGLINE}&rdquo;</span>
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="glitch btn3d px-2 py-0.5 font-mono text-[11px] text-foreground"
            >
              {`> ${EMAIL}`}
            </a>
          </div>
        </div>
      </header>

      {/* desktop area with floating windows + scattered grid */}
      <section className="relative px-3 py-5">
        {/* floating draggable artifacts — desktop only to avoid mobile chaos */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="pointer-events-auto">
            <DragWindow title="readme.txt" startX={20} startY={10} z={12} width={250}>
              <div className="inset3d bg-popover p-2 font-mono text-[11px] leading-relaxed text-foreground">
                <p className="font-hand text-sm text-blue">drag me around :)</p>
                <p className="mt-1">
                  you found the dump. 4 works survived. everything is slightly broken on purpose.
                </p>
                <p className="mt-1 text-muted-foreground">{`— ${ARTIST}`}</p>
              </div>
            </DragWindow>
          </div>
          <div className="pointer-events-auto">
            <DragWindow title="error_0x7E.log" startX={0} startY={150} z={11} dead width={230}>
              <div className="inset3d bg-popover p-2 font-mono text-[10px] leading-snug text-warn">
                <p>FATAL: feeling.module not found</p>
                <p>at angel.seen (0xDEAD)</p>
                <p>stack overflow in /dev/sleep</p>
                <p className="text-muted-foreground">[ ignore ] [ ignore ] [ ignore ]</p>
              </div>
            </DragWindow>
          </div>
          <div className="pointer-events-auto">
            <DragWindow title="NOW_PLAYING.exe" startX={20} startY={330} z={11} width={220}>
              <div className="inset3d bg-black p-2 font-terminal text-base leading-tight text-green">
                <p>{"> static.wav |||...."}</p>
                <p>{"> dialup_scream.mp3"}</p>
                <p className="blink">{"> buffering..."}</p>
              </div>
            </DragWindow>
          </div>
        </div>

        {/* the gallery: artifacts scattered into a tight chaotic grid */}
        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:ml-auto lg:mr-0 lg:max-w-3xl lg:grid-cols-2">
          {works.map((w, i) => (
            <div key={w.slug} style={{ marginTop: i % 2 === 1 ? "1.5rem" : 0 }}>
              <ArtifactCard work={w} idx={i} />
            </div>
          ))}
        </div>
      </section>

      {/* folder tree footer */}
      <footer className="border-t-2 border-dirt bg-card px-3 py-4 font-mono text-[11px] text-foreground">
        <p className="text-muted-foreground">{"// DIRECTORY"}</p>
        <ul className="mt-1">
          <li>{"[DIR] C:\\ARCHIVE\\JCBV"}</li>
          {works.map((w, i) => (
            <li key={w.slug} className="pl-4">
              <Link href={`/works/${w.slug}`} className="hover:bg-warn hover:text-white">
                {`+- ${String(i + 1).padStart(2, "0")}_${w.filename} `}
                <span className="text-muted-foreground">[{w.status}]</span>
              </Link>
            </li>
          ))}
          <li className="pl-4">{`\\- contact -> ${EMAIL}`}</li>
        </ul>
        <p className="mt-3 text-muted-foreground">
          {`${ARTIST} — ${TAGLINE} — this site rejects clean SaaS. it is a memory dump.`}
        </p>
      </footer>
    </main>
  )
}

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { works, getWork, ARTIST, EMAIL, TAGLINE } from "@/lib/works"

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

const statusColor: Record<string, string> = {
  RECOVERED: "text-green",
  CORRUPTED: "text-warn",
  PARTIAL: "text-blue",
  QUARANTINED: "text-warn",
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = getWork(slug)
  if (!work) notFound()

  const index = works.findIndex((w) => w.slug === work.slug)
  const next = works[(index + 1) % works.length]

  return (
    <main className="crt relative min-h-screen overflow-x-hidden px-2 py-2 sm:px-4 sm:py-4">
      {/* status bar */}
      <div className="mb-3 flex items-center justify-between gap-2 border-b-2 border-dirt bg-primary px-2 py-1 font-mono text-[11px] text-primary-foreground">
        <Link href="/" className="glitch btn3d px-1.5 text-foreground">
          {"< C:\\ARCHIVE"}
        </Link>
        <span className="truncate">{`opening ${work.filename} ...`}</span>
        <span className={`${statusColor[work.status]} blink`}>● {work.status}</span>
      </div>

      <div className="mx-auto max-w-5xl">
        {/* main file-viewer window */}
        <article className="win">
          <div className="win-bar flex items-center justify-between px-2 py-0.5">
            <span className="truncate font-mono text-[12px] font-bold">
              {`IMG_VIEW.exe — [ ${work.filename} ]`}
            </span>
            <span className="font-mono text-[10px]">{"[ _ ] [ # ] [ x ]"}</span>
          </div>

          <div className="p-2 sm:p-3">
            {/* title */}
            <div className="inset3d bg-popover p-2">
              <h1
                className="chromatic font-display text-3xl leading-[0.9] tracking-tight text-foreground sm:text-5xl"
                style={{ textShadow: "2px 0 var(--blue), -2px 0 var(--warn)" }}
              >
                {work.title}
              </h1>
              <p className="mt-1 font-hand text-sm text-blue">{`"${TAGLINE}" — ${ARTIST}`}</p>
            </div>

            {/* layout: image + metadata panel */}
            <div className="mt-3 grid gap-3 lg:grid-cols-[1.7fr_1fr]">
              {/* framed corrupted image */}
              <figure className="corrupt relative border-2 border-dirt bg-black p-1">
                <div className="crt relative">
                  <Image
                    src={work.src || "/placeholder.svg"}
                    alt={work.title}
                    width={1414}
                    height={2000}
                    className="mx-auto block h-auto w-full max-w-[560px] object-contain"
                    priority
                  />
                </div>
                <figcaption className="bg-black px-1 py-0.5 text-center font-mono text-[9px] text-green">
                  {`${work.filename} · ${work.dims} · ${work.bytes} · ${work.format}`}
                </figcaption>
              </figure>

              {/* metadata sidebar */}
              <aside className="flex flex-col gap-3">
                {/* file properties */}
                <div className="inset3d bg-popover p-2 font-mono text-[11px] text-foreground">
                  <p className="mb-1 bg-primary px-1 text-primary-foreground">FILE PROPERTIES</p>
                  <dl className="space-y-0.5">
                    <Row k="name" v={work.filename} />
                    <Row k="status" v={work.status} cls={statusColor[work.status]} />
                    <Row k="bytes" v={work.bytes} />
                    <Row k="dims" v={work.dims} />
                    <Row k="format" v={work.format} />
                    <Row k="year" v={work.year} />
                  </dl>
                </div>

                {/* tags */}
                <div className="inset3d bg-popover p-2">
                  <p className="mb-1 font-mono text-[11px] text-muted-foreground">{"// TAGS"}</p>
                  <div className="flex flex-wrap gap-1">
                    {work.tags.map((t) => (
                      <span
                        key={t}
                        className="glitch bg-secondary px-1 font-mono text-[10px] text-secondary-foreground hover:bg-warn hover:text-white"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* raw data dump */}
                <div className="inset3d bg-black p-2 font-terminal text-sm leading-tight text-green">
                  <p className="text-blue">{"> hexdump --corrupt"}</p>
                  <p className="break-all">{work.raw}</p>
                  <p className="blink">{"> _"}</p>
                </div>
              </aside>
            </div>

            {/* recovery log (terminal) */}
            <div className="mt-3 inset3d bg-black p-2 font-terminal text-base leading-snug text-green">
              <p className="text-blue">{`> tail -f /var/log/${work.slug}.log`}</p>
              {work.log.map((line, i) => (
                <p key={i} className={line.includes("ERR") || line.includes("WARN") ? "text-warn" : ""}>
                  {line}
                </p>
              ))}
              <p className="blink text-green">{"> EOF_"}</p>
            </div>

            {/* description as a dead notepad window */}
            <div className="mt-3 win">
              <div className="win-bar-dead flex items-center justify-between px-2 py-0.5">
                <span className="font-mono text-[11px] font-bold">{`notes_${work.slug}.txt — Notepad`}</span>
                <span className="font-mono text-[10px]">{"[ x ]"}</span>
              </div>
              <div className="bg-popover p-3 font-mono text-[12px] leading-relaxed text-foreground sm:text-[13px]">
                {work.blurb.map((p, i) => (
                  <p key={i} className="mb-2">
                    {p}
                  </p>
                ))}
                <p className="mt-2 font-hand text-base text-blue">— recovered fragment, do not delete</p>
              </div>
            </div>
          </div>
        </article>

        {/* contact + next, as taskbar-style strip */}
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="glitch btn3d flex-1 px-3 py-2 text-center font-mono text-[12px] text-foreground hover:bg-warn hover:text-white"
          >
            {`✉ commission / contact -> ${EMAIL}`}
          </a>
          <Link
            href={`/works/${next.slug}`}
            className="glitch btn3d flex-1 px-3 py-2 text-center font-mono text-[12px] text-foreground hover:bg-blue hover:text-white"
          >
            {`next artifact >> ${next.filename}`}
          </Link>
        </div>

        <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground">
          {`${ARTIST} — ${TAGLINE} — corrupted archive build`}
        </p>
      </div>
    </main>
  )
}

function Row({ k, v, cls }: { k: string; v: string; cls?: string }) {
  return (
    <div className="flex justify-between gap-2 border-b border-dirt/40 py-0.5">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className={`truncate text-right ${cls ?? "text-foreground"}`}>{v}</dd>
    </div>
  )
}

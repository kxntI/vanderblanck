import Image from "next/image"
import Link from "next/link"
import { RetroShell } from "@/components/site-nav"
import { works } from "@/lib/works"

export default function GalleryPage() { return <RetroShell><section className="mx-auto max-w-5xl p-3 sm:p-6"><div className="retro-window p-3 sm:p-5"><p className="retro-title">GALLERY.HTML // IMAGE INDEX</p><h1 className="font-pixel mb-2 text-4xl text-[#ff48c8]">RECOVERED IMAGES</h1><p className="mb-6 font-mono text-xs text-[#8fffff]">click a file name to inspect the corrupted metadata</p><div className="grid gap-5 sm:grid-cols-2">{works.map((work, i) => <Link key={work.slug} href={`/works/${work.slug}`} className="group border-2 border-black bg-[#c0c0c0] p-2 text-black shadow-[5px_5px_0_#000]"><Image src={work.src} alt={work.title} width={600} height={800} className="aspect-[3/4] w-full object-cover grayscale transition group-hover:grayscale-0" /><div className="mt-2 font-mono text-xs"><p className="font-bold">FILE_{String(i + 1).padStart(2, "0")} // {work.title}</p><p className="text-[#800080]">{work.status} // {work.format}</p></div></Link>)}</div></div></section></RetroShell> }

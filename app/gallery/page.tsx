import Image from "next/image"
import { RetroShell } from "@/components/site-nav"
import { works } from "@/lib/works"

export default function GalleryPage() { return <RetroShell><div className="mx-auto max-w-5xl px-4 py-10"><div className="retro-window p-3"><div className="retro-title">GALLERY.EXE // RECOVERED IMAGES</div><h1 className="font-pixel text-5xl text-[#ff48c8]">THE IMAGE DUMP</h1><div className="mt-8 grid gap-5 sm:grid-cols-2">{works.map((work) => <a key={work.slug} href={`/works/${work.slug}`} className="border-2 border-[#7df9ff] bg-black p-2 hover:border-[#ff48c8]"><Image src={work.image} alt={work.title} width={work.width} height={work.height} className="h-auto w-full" /><p className="mt-2 font-mono text-xs text-[#7df9ff]">{work.title}</p></a>)}</div></div></div></RetroShell> }

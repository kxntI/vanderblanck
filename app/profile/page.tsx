import Image from "next/image"
import { RetroShell } from "@/components/site-nav"
import { ARTIST, EMAIL, TAGLINE } from "@/lib/works"

export default function ProfilePage() {
  return <RetroShell><section className="retro-window mx-auto max-w-4xl p-3 sm:p-6"><p className="retro-title">PROFILE.TXT // PERSONAL PROFILE</p><div className="grid gap-6 md:grid-cols-[220px_1fr]"><Image src="/works/what-even-feels.jpg" alt="Glitched portrait artwork from the archive" width={420} height={620} className="h-auto w-full border-4 border-black object-cover" /><div className="space-y-4 font-mono text-sm leading-relaxed"><h1 className="font-pixel text-4xl text-[#ff48c8]">{ARTIST}</h1><p className="text-[#8fffff]">&quot;{TAGLINE}&quot;</p><p>Juan Carlos B Valenzuela is a visual artist building strange little worlds from corrupted memories, internet debris, photography, collage, and the feeling that a computer is watching back.</p><p>This is the personal profile page. It is intentionally unfinished, loud, and a little suspicious. The work lives somewhere between a bedroom desktop, an abandoned forum, and a dream that refuses to load correctly.</p><p><span className="text-[#ff48c8]">CONTACT:</span> <a className="underline hover:bg-[#ff48c8] hover:text-black" href={`mailto:${EMAIL}`}>{EMAIL}</a></p></div></div></section></RetroShell>
}

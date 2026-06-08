export type Work = {
  slug: string
  filename: string
  title: string
  year: string
  src: string
  bytes: string
  dims: string
  format: string
  status: "RECOVERED" | "CORRUPTED" | "PARTIAL" | "QUARANTINED"
  tags: string[]
  // chaotic placement on the desktop
  rot: number
  log: string[]
  blurb: string[]
  // hex/ascii noise snippet shown as "raw data"
  raw: string
}

export const ARTIST = "Juan Carlos B Valenzuela"
export const EMAIL = "theosumanishere@gmail.com"
export const TAGLINE = "seen this angel"

export const works: Work[] = [
  {
    slug: "the-flowers-bloomed-with-hate",
    filename: "N-phenyl-N-propanamide_abuse.png",
    title: "THE FLOWERS BLOOMED WITH HATE",
    year: "20XX",
    src: "/works/flowers-bloomed-with-hate.jpg",
    bytes: "4.21 MB",
    dims: "1414 x 2000",
    format: "PNG / dreamcore collage",
    status: "CORRUPTED",
    tags: ["dreamcore", "vaporwave", "poetry", "dissociation", "win98", "data-corruption"],
    rot: -2.4,
    log: [
      "> mounting /dev/sleep ... OK",
      "> reading walls.breathe ... slow",
      "> ERR: reflection not broken (mirror intact)",
      "> spawning Delete.exe x6",
      "> forget_about_me.loop ENABLED",
    ],
    blurb: [
      "A dissociative bloom. Magenta rot eats the canvas while a blue bust labelled YOU stares back through Theflowersbloomedwithhate.org.",
      "Stacked Delete dialogs and 'forget about me' notepad windows pile into a memory dump. Ends when the dreamer shatters: 'till I'm Thanatik.'",
    ],
    raw: "FF 1F 6B 3B 1B D6 DE AD B0 0F 00 FF // bloom_overflow",
  },
  {
    slug: "photography",
    filename: "photography.png",
    title: "PHOTOGRAPHY // SEE THE WORLD YOUR OWN WAY",
    year: "20XX",
    src: "/works/photography.jpg",
    bytes: "3.88 MB",
    dims: "1414 x 2000",
    format: "PNG / editorial print scan",
    status: "RECOVERED",
    tags: ["editorial", "swiss", "industrial", "scaffold", "print", "instructional"],
    rot: 1.8,
    log: [
      "> loading paper_texture.tiff ... OK",
      "> grid 48px ... aligned",
      "> ISO/APERTURE/SHUTTER parsed",
      "> safety_tips: DONT TRESPASS",
      "> BACK UP YOUR PHOTOS",
    ],
    blurb: [
      "A poster pretending to be an instruction manual. Twisted scaffolds and brick film-strips run the gutter; bold PHOTOGRAPHY sits over a torn cloud.",
      "BENEFITS / STEPS / safety tips fragment into a how-to that's half gallery wall, half abandoned darkroom leaflet.",
    ],
    raw: "50 4E 47 0D 0A 1A 0A // clean_scan_no_errors",
  },
  {
    slug: "connected-by-purpose",
    filename: "Connected_by_Purpose.png",
    title: "CONNECTED BY PURPOSE // WE ARE ONE",
    year: "20XX",
    src: "/works/connected-by-purpose.png",
    bytes: "5.02 MB",
    dims: "1333 x 2000",
    format: "PNG / surveillance collage",
    status: "QUARANTINED",
    tags: ["surveillance", "halftone", "faces", "thermal", "net-art", "machine-dream"],
    rot: -1.2,
    log: [
      "> indexing faces ... 6 subjects",
      "> applying thermal_bars over eyes",
      "> WARN: identities masked",
      "> globe.wireframe handed off",
      "> EVERYONE tagged",
    ],
    blurb: [
      "Six grayscale faces, eyes censored by infrared bars. A halftone hand cradles a wireframe globe over the line 'Everyone is connected... We are one.'",
      "A silhouette stands on a pedestal built from stacked, watching eyes. Surveillance posing as togetherness. Signed Valmureta.",
    ],
    raw: "45 56 45 52 59 4F 4E 45 // watched_watched_watched",
  },
  {
    slug: "what-even-feels",
    filename: "What_even_feels.png",
    title: "WHAT EVEN FEELS // seen this angel",
    year: "20XX",
    src: "/works/what-even-feels.jpg",
    bytes: "6.44 MB",
    dims: "1333 x 2000",
    format: "PNG / glitch maximalism",
    status: "PARTIAL",
    tags: ["glitchcore", "cyberpunk", "kanji", "analog-horror", "maximalism", "terminal"],
    rot: 2.6,
    log: [
      "> decoding kanji_wall.dat ... 4096 glyphs",
      "> ERR: city tiles misaligned",
      "> 'seen this Angel' frame located",
      "> gold skull artifact present",
      "> feeling.module NOT FOUND",
    ],
    blurb: [
      "A black wall tiled with kanji and halftone cities. A purple-red stairwell frames the words 'seen this Angel' beside a vintage suited broadcaster.",
      "A golden distorted skull and looping eye-figures crowd the dark. Maximal industrial-cyberpunk debris where the feeling module simply returns null.",
    ],
    raw: "E8 9F B8 6B 2B D6 00 DE AD // angel_seen_null",
  },
]

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug)
}

import { createFileRoute, Link } from "@tanstack/react-router";
import heroMilan from "@/assets/hero-milan.jpg";
import manzoniPortrait from "@/assets/manzoni-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manzoni & I Promessi Sposi — Prova Esperta 2C INFO" },
      { name: "description", content: "Biografia, edizioni, trama, personaggi, tematiche e una passeggiata nei luoghi della peste milanese del 1630." },
      { property: "og:title", content: "Manzoni & I Promessi Sposi" },
      { property: "og:description", content: "Viaggio interattivo tra letteratura e storia." },
    ],
  }),
  component: Index,
});

const chapters = [
  { to: "/biografia", n: "I", title: "Biografia", text: "La vita di Alessandro Manzoni, da Milano a Parigi, dalla conversione al Risorgimento." },
  { to: "/edizioni", n: "II", title: "Edizioni dell'opera", text: "Da Fermo e Lucia alla Quarantana: la lunga maturazione del romanzo." },
  { to: "/trama", n: "III", title: "Trama", text: "L'amore di Renzo e Lucia ostacolato da don Rodrigo, tra carestia, guerra e peste." },
  { to: "/personaggi", n: "IV", title: "Personaggi", text: "Renzo, Lucia, don Rodrigo, fra Cristoforo, l'Innominato e gli altri." },
  { to: "/tematiche", n: "V", title: "Tematiche", text: "Provvidenza, umili, forza reale e forza legale: il romanzo storico." },
  { to: "/history-walk", n: "VI", title: "History Walk", text: "Una mappa interattiva di Milano sulle orme della peste del 1630." },
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroMilan} alt="Milano del Seicento durante la peste" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/65 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-32">
          <div className="max-w-3xl">
            <p className="ornament left mb-6">Prova Esperta · Classe 2C INFO</p>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
              Manzoni<br />
              <span className="italic text-primary">e i Promessi Sposi</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-foreground/80 md:text-xl">
              Una lettura corale: la biografia dell'autore, le tre redazioni del romanzo, la trama, i personaggi, le tematiche e una passeggiata
              nei luoghi reali della <em>peste milanese del 1630</em>.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/history-walk" className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition hover:bg-primary/90">
                Esplora la mappa di Milano
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/biografia" className="inline-flex items-center gap-2 rounded-sm border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5">
                Inizia dalla biografia
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="paper rounded-sm p-2">
            <img src={manzoniPortrait} alt="Ritratto di Alessandro Manzoni" loading="lazy" width={1024} height={1024} className="w-full" />
          </div>
          <div>
            <p className="ornament left mb-4">L'autore</p>
            <h2 className="font-display text-4xl text-foreground md:text-5xl">«La storia non è che una guerra continua»</h2>
            <p className="drop-cap mt-8 text-lg leading-relaxed text-foreground/85">
              Alessandro Manzoni nasce a Milano nel 1785 e muore nella stessa città nel 1873. La sua opera ha dato all'Italia un romanzo
              moderno e una lingua comune: un fiorentino colto, "risciacquato in Arno", capace di parlare a tutto il paese.
            </p>
            <Link to="/biografia" className="mt-8 inline-flex items-baseline gap-2 text-primary">
              Leggi la biografia completa <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-parchment/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="ornament mb-4">Indice dei capitoli</p>
            <h2 className="font-display text-4xl text-foreground md:text-5xl">Sei tappe per leggere il romanzo</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c) => (
              <Link key={c.to} to={c.to} className="group flex flex-col bg-card p-8 transition hover:bg-parchment">
                <span className="font-display text-5xl text-primary/30 transition group-hover:text-primary/70">{c.n}</span>
                <h3 className="mt-4 font-display text-2xl text-foreground">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="mt-6 text-xs uppercase tracking-[0.2em] text-primary/80">Leggi →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import editions from "@/assets/editions.jpg";

export const Route = createFileRoute("/edizioni")({
  head: () => ({
    meta: [
      { title: "Le edizioni dei Promessi Sposi — Fermo e Lucia, Ventisettana, Quarantana" },
      { name: "description", content: "Le tre redazioni del romanzo di Manzoni: dalla prima stesura del 1823 alla Quarantana del 1840-42." },
      { property: "og:title", content: "Le edizioni dei Promessi Sposi" },
      { property: "og:description", content: "Da Fermo e Lucia alla Quarantana: la lunga maturazione del capolavoro manzoniano." },
    ],
  }),
  component: Edizioni,
});

const editionsData = [
  {
    year: "1823-25",
    short: "I",
    title: "Fermo e Lucia",
    sub: "Prima edizione",
    text: "L'idea del romanzo risale al 24 aprile 1821, quando Manzoni cominciò la stesura di Fermo e Lucia. Dopo circa due capitoli interruppe il lavoro per dedicarsi all'Adelchi e all'ode Il cinque maggio. Dall'aprile 1822 il lavoro fu ripreso e portato a termine il 17 settembre 1823. La seconda redazione, intitolata Gli sposi promessi, è databile tra il 1823 e il 1825.",
  },
  {
    year: "1827",
    short: "II",
    title: "Ventisettana",
    sub: "Prima pubblicazione ufficiale",
    text: "La ventisettana è la prima pubblicazione ufficiale del romanzo. Rispetto alla prima edizione, Manzoni cambia drasticamente la scrittura, migliorando la struttura e lo stile per renderlo più piacevole alla lettura. Nonostante abbia rivoluzionato quasi tutta la struttura, la lingua rimane ancora influenzata dal lombardo. Nel 1827 viene pubblicata, segnando il \"debutto\" del romanzo.",
  },
  {
    year: "1840-42",
    short: "III",
    title: "Quarantana",
    sub: "Edizione definitiva",
    text: "L'edizione definitiva fu pubblicata a dispense a Milano dalla tipografia di Vincenzo Guglielmini e Giuseppe Redaelli tra il novembre 1840 e il novembre 1842, con l'aggiunta della Storia della colonna infame. Manzoni uniformò la lingua verso un fiorentino colto e moderno, eliminando lombardismi e latinismi. Si recò a Firenze per \"risciacquare i panni in Arno\": nasceva così la prosa italiana moderna.",
  },
];

function Edizioni() {
  return (
    <article>
      <header className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0">
          <img src={editions} alt="" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="ornament mb-4">Capitolo II</p>
          <h1 className="font-display text-5xl text-foreground md:text-7xl">Le edizioni dell'opera</h1>
          <p className="mt-4 italic text-muted-foreground">a cura di Gaita · Mascheroni</p>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Tre redazioni, vent'anni di lavoro: Manzoni riscrisse <em>I Promessi Sposi</em> alla ricerca di una lingua che parlasse a tutta l'Italia.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-16">
          {editionsData.map((e, i) => (
            <div key={e.year} className={`grid gap-8 md:grid-cols-[160px_1fr] md:items-start ${i % 2 ? "md:flex-row-reverse" : ""}`}>
              <div className="text-center md:text-left">
                <p className="font-display text-7xl leading-none text-primary/30">{e.short}</p>
                <p className="mt-3 font-display text-3xl text-primary">{e.year}</p>
              </div>
              <div className="paper rounded-sm p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70">{e.sub}</p>
                <h2 className="mt-2 font-display text-4xl text-foreground">{e.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/85">{e.text}</p>
              </div>
            </div>
          ))}
        </div>

        <aside className="mt-20 rounded-sm border-l-4 border-accent bg-parchment/70 p-8">
          <p className="font-display text-2xl italic text-primary">«Risciacquare i panni in Arno»</p>
          <p className="mt-3 text-foreground/80">
            Con questa celebre espressione Manzoni descrisse il suo soggiorno a Firenze: immergere la propria scrittura nel toscano vivo per
            dare all'Italia una lingua finalmente comune.
          </p>
        </aside>
      </section>
    </article>
  );
}

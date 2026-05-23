import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import milanMap from "@/assets/milan-map.jpg";

export const Route = createFileRoute("/history-walk")({
  head: () => ({
    meta: [
      { title: "History Walk — Milano e la peste del 1630 | Promessi Sposi" },
      { name: "description", content: "Una mappa interattiva dei luoghi milanesi legati ai Promessi Sposi e alla peste del 1630: Ambrosiana, San Sebastiano, Colonna Infame, Università, San Bernardino alle Ossa." },
      { property: "og:title", content: "History Walk · Milan's Plague Trail" },
      { property: "og:description", content: "Five stops in Milan connecting Manzoni's novel to the real 1630 plague." },
    ],
  }),
  component: HistoryWalk,
});

type Stop = {
  id: string;
  num: number;
  name: string;
  place: string;
  group: string;
  x: number; // percentage
  y: number;
  it: string;
  en: string;
};

const stops: Stop[] = [
  {
    id: "ambrosiana",
    num: 1,
    name: "Biblioteca & Pinacoteca Ambrosiana",
    place: "Piazza San Sepolcro",
    group: "Bibliotecae pinacoteca Ambrosiana",
    x: 36, y: 52,
    it: "Istituzione culturale fondata dal cardinale Federico Borromeo, figura centrale del romanzo manzoniano. Borromeo è uno dei pochi personaggi storici realmente esistiti nei Promessi Sposi: rappresenta la fede, la carità e l'autorità morale in tempo di peste.",
    en: "Cultural institution founded by Cardinal Federico Borromeo — a central figure in Manzoni's novel. The Ambrosiana embodies faith and charity during the plague.",
  },
  {
    id: "san-sebastiano",
    num: 2,
    name: "Tempio Civico di San Sebastiano",
    place: "Via Torino",
    group: "Gaita · Mascheroni",
    x: 48, y: 60,
    it: "Chiesa dedicata a San Sebastiano, patrono invocato contro la peste. La sua costruzione fu votata dalla città durante un'epidemia precedente: un monumento alla paura collettiva e alla devozione del Cinquecento milanese.",
    en: "A church on Via Torino dedicated to St Sebastian, patron saint invoked against the plague. Its construction was vowed during an earlier epidemic.",
  },
  {
    id: "colonna-infame",
    num: 3,
    name: "Crocetta di San Dionigi & Colonna Infame",
    place: "Corso di Porta Romana",
    group: "Radaelli · Napolitano",
    x: 60, y: 72,
    it: "Colonna di pietra con croce eretta da San Carlo Borromeo durante la peste, quando le chiese chiuse spingevano i fedeli a pregare in strada. Nel 1630 due innocenti — Mora e Piazza — furono accusati di essere \"untori\", torturati e uccisi: il governo eresse una \"Colonna Infame\" per infamarli. Manzoni scrisse un saggio storico per dimostrarne l'innocenza.",
    en: "Site of the Colonna Infame — a column erected to mark the accused plague-spreaders. Manzoni wrote a historical essay about this miscarriage of justice.",
  },
  {
    id: "universita",
    num: 4,
    name: "Università degli Studi · Ospedale Maggiore",
    place: "Via Festa del Perdono",
    group: "Zucchini · Dumbrava · Dimitrisen",
    x: 56, y: 56,
    it: "Grande complesso rinascimentale costruito nel 1456 da Francesco Sforza come Ospedale Maggiore — la principale istituzione medica di Milano. Durante la peste del 1630, le sue corsie furono travolte dall'epidemia descritta da Manzoni. Oggi è la sede storica dell'Università degli Studi.",
    en: "Renaissance complex built in 1456 by Francesco Sforza as the Ospedale Maggiore. Overwhelmed during the 1630 plague, today it is home to the University of Milan.",
  },
  {
    id: "ossa",
    num: 5,
    name: "San Bernardino alle Ossa",
    place: "Piazza Santo Stefano",
    group: "Caputo · Fernando · Rampani",
    x: 64, y: 60,
    it: "Cappella le cui pareti sono decorate con ossa umane — un memento mori per le vittime della peste milanese. Un luogo silenzioso e potentissimo, che traduce in pietra e ossa la stessa pietà che attraversa i capitoli manzoniani sulla peste.",
    en: "A chapel near Piazza Santo Stefano whose walls are decorated with human bones — a haunting reminder of Milan's plague dead.",
  },
];

function HistoryWalk() {
  const [activeId, setActiveId] = useState<string>(stops[0].id);
  const active = stops.find((s) => s.id === activeId)!;

  return (
    <article>
      <header className="mx-auto max-w-5xl px-6 pb-10 pt-20 text-center">
        <p className="ornament mb-4">Capitolo VI · English Project</p>
        <h1 className="font-display text-5xl text-foreground md:text-7xl">Milan's Plague Trail</h1>
        <p className="mt-4 font-display text-2xl italic text-primary">Sulle orme della peste del 1630</p>
        <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
          Cinque tappe milanesi tra letteratura e storia. Clicca sui segnalini sulla mappa per scoprire ogni luogo —
          <em> click the pins to discover each location</em>. Ricerca immagini: Seif.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Interactive image map */}
          <div className="paper relative overflow-hidden rounded-sm p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
              <img src={milanMap} alt="Mappa illustrata di Milano centro storico" width={1600} height={1000} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5" />
              {stops.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  className="map-pin"
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                  data-active={activeId === s.id}
                  aria-label={`Tappa ${s.num}: ${s.name}`}
                >
                  <span className="relative block">
                    <span className="pulse block" />
                    <span className="dot relative flex items-center justify-center font-display text-[0.7rem] font-bold text-primary-foreground">
                      {s.num}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between px-2 py-3 text-xs text-muted-foreground">
              <span className="uppercase tracking-[0.25em]">Mappa di Milano · centro storico</span>
              <span className="italic">5 stops · 5 stories</span>
            </div>
          </div>

          {/* Stop detail */}
          <aside key={active.id} className="paper flex flex-col rounded-sm p-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80">Stop {active.num} of 5</p>
                <h2 className="mt-2 font-display text-3xl text-foreground">{active.name}</h2>
                <p className="mt-1 italic text-muted-foreground">{active.place}</p>
              </div>
              <span className="font-display text-6xl leading-none text-primary/20">{active.num}</span>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="ornament left mb-2">Italiano</p>
                <p className="text-foreground/85 leading-relaxed">{active.it}</p>
              </div>
              <div>
                <p className="ornament left mb-2">English</p>
                <p className="text-foreground/85 leading-relaxed">{active.en}</p>
              </div>
            </div>

            <p className="mt-auto pt-6 text-xs uppercase tracking-[0.25em] text-primary/80">a cura di {active.group}</p>
          </aside>
        </div>

        {/* Stop chips */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {stops.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`group rounded-sm border p-4 text-left transition ${
                activeId === s.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/50"
              }`}
            >
              <span className={`font-display text-2xl ${activeId === s.id ? "text-primary-foreground" : "text-primary/60"}`}>
                {String(s.num).padStart(2, "0")}
              </span>
              <p className="mt-1 text-xs font-medium leading-tight">{s.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Plague facts */}
      <section className="border-y border-border/70 bg-parchment/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="ornament mb-8">The 1630 Plague · in numbers</p>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { n: "~1M", t: "morti", d: "L'epidemia italiana del 1629-1631 uccise circa un milione di persone nel Nord Italia." },
              { n: "46%", t: "di Milano", d: "La città passò da circa 130.000 abitanti a meno di 70.000." },
              { n: "1347", t: "la prima ondata", d: "La grande peste europea era arrivata in Sicilia nel 1347 e si era diffusa verso nord." },
            ].map((s) => (
              <div key={s.t} className="border-l-2 border-primary pl-6">
                <p className="font-display text-6xl text-primary">{s.n}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.t}</p>
                <p className="mt-3 text-foreground/80">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

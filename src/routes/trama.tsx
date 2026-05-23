import { createFileRoute } from "@tanstack/react-router";
import renzoLucia from "@/assets/renzo-lucia.jpg";

export const Route = createFileRoute("/trama")({
  head: () => ({
    meta: [
      { title: "Trama dei Promessi Sposi — Renzo, Lucia e don Rodrigo" },
      { name: "description", content: "La trama del romanzo di Manzoni: amore, fuga, peste e Provvidenza nella Lombardia del Seicento." },
      { property: "og:title", content: "Trama dei Promessi Sposi" },
      { property: "og:description", content: "Renzo e Lucia, don Rodrigo, l'Innominato, i tumulti di Milano e la peste del 1630." },
    ],
  }),
  component: Trama,
});

const acts = [
  { n: "I", t: "L'ostacolo", d: "Renzo e Lucia, due giovani contadini lombardi, vogliono sposarsi. Don Rodrigo, signore prepotente, per capriccio decide di impedire le nozze." },
  { n: "II", t: "La fuga", d: "I due sono costretti a scappare dal loro paese e a separarsi. Lucia trova rifugio in un convento a Monza; Renzo parte verso Milano." },
  { n: "III", t: "Il rapimento", d: "Lucia viene rapita per conto di don Rodrigo dall'Innominato, un uomo temuto da tutti. La sua innocenza provoca però la conversione del rapitore, che la libera." },
  { n: "IV", t: "I tumulti", d: "Renzo, arrivato a Milano, si ritrova coinvolto nei tumulti popolari causati dalla carestia, tra confusione e pericolo." },
  { n: "V", t: "La peste", d: "Sulla Lombardia si abbatte la terribile peste del 1630, che porta morte e sofferenza ovunque, colpendo tantissime persone — compreso don Rodrigo." },
  { n: "VI", t: "La Provvidenza", d: "Anche dai momenti più dolorosi può essere tratto un significato più grande: alla fine il bene prevale, come se una guida superiore — la Provvidenza — accompagnasse le vicende umane." },
];

function Trama() {
  return (
    <article>
      <header className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0">
          <img src={renzoLucia} alt="" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-28">
          <p className="ornament left mb-4">Capitolo III</p>
          <h1 className="font-display text-5xl text-foreground md:text-7xl">La Trama</h1>
          <p className="mt-3 italic text-muted-foreground">a cura di Radaelli · Napolitano</p>
          <p className="mt-6 max-w-xl text-lg text-foreground/85">
            Una storia d'amore piena di difficoltà, ostacoli e prove durissime, ambientata nella Lombardia del Seicento.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="drop-cap text-lg leading-relaxed text-foreground/85">
          Il romanzo <em>I Promessi Sposi</em> racconta la storia di due giovani, Renzo e Lucia, che si vogliono bene e desiderano sposarsi per
          costruire una vita tranquilla e felice insieme. Però questo loro sogno viene ostacolato da un uomo potente e prepotente, don Rodrigo,
          che per capriccio e abuso di potere decide di impedire il matrimonio.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="ornament mb-8">In sei atti</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {acts.map((a) => (
            <article key={a.n} className="paper group rounded-sm p-7 transition hover:-translate-y-1">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl text-primary/30 transition group-hover:text-primary/60">{a.n}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Atto</span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-foreground">{a.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{a.d}</p>
            </article>
          ))}
        </div>

        <blockquote className="mx-auto mt-20 max-w-3xl border-l-4 border-primary bg-parchment/60 p-8 font-display text-2xl italic text-primary">
          «Il senso profondo è che anche dai momenti più dolorosi può essere tratto un significato più grande: le sofferenze insegnano qualcosa
          e, alla fine, il bene può prevalere.»
        </blockquote>
      </section>
    </article>
  );
}

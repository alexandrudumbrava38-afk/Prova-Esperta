import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/personaggi")({
  head: () => ({
    meta: [
      { title: "Personaggi dei Promessi Sposi — Renzo, Lucia, don Rodrigo e gli altri" },
      { name: "description", content: "I personaggi principali del romanzo di Manzoni: Renzo, Lucia, don Rodrigo, don Abbondio, fra Cristoforo, la Monaca di Monza, l'Innominato, Perpetua, Agnese." },
      { property: "og:title", content: "I personaggi dei Promessi Sposi" },
      { property: "og:description", content: "Un ritratto dei protagonisti del romanzo manzoniano." },
    ],
  }),
  component: Personaggi,
});

const characters = [
  { n: "Renzo Tramaglino", role: "Protagonista", initial: "R", side: "bene", d: "Giovane filatore di seta di Lecco, promesso a Lucia. Impulsivo e generoso, attraversa carestia, rivolte e peste maturando attraverso le prove." },
  { n: "Lucia Mondella", role: "Protagonista", initial: "L", side: "bene", d: "Contadina pia e timorata di Dio. La sua fede incrollabile e la sua innocenza salvano lei stessa e perfino l'Innominato." },
  { n: "Don Rodrigo", role: "Antagonista", initial: "R", side: "male", d: "Signorotto prepotente che, per una scommessa, decide di impedire il matrimonio. Incarna la \"forza reale\", il potere arbitrario. Morirà di peste." },
  { n: "Don Abbondio", role: "Parroco", initial: "A", side: "neutro", d: "Curato pavido e opportunista. Minacciato dai bravi di don Rodrigo, rifiuta di celebrare le nozze: il suo \"coraggio non se lo può dare\"." },
  { n: "Fra Cristoforo", role: "Cappuccino", initial: "C", side: "bene", d: "Frate dal passato turbolento, convertito dopo aver ucciso un uomo. Difende gli umili e si sacrifica nel lazzaretto durante la peste." },
  { n: "La Monaca di Monza", role: "Gertrude", initial: "G", side: "tragico", d: "Costretta a prendere i voti contro la sua volontà. Tradisce Lucia consegnandola ai sicari dell'Innominato. Figura tragica e ambigua." },
  { n: "L'Innominato", role: "Convertito", initial: "I", side: "redenzione", d: "Potente signore senza nome, temuto e malvagio. L'incontro con Lucia provoca la sua conversione, una delle pagine più alte del romanzo." },
  { n: "Perpetua", role: "Serva", initial: "P", side: "neutro", d: "Domestica di don Abbondio, schietta e popolaresca. Una delle voci più vivaci del romanzo." },
  { n: "Agnese", role: "Madre di Lucia", initial: "A", side: "bene", d: "Donna pratica e affettuosa, suggerisce il \"matrimonio a sorpresa\" per aggirare don Abbondio." },
];

const sideColor: Record<string, string> = {
  bene: "from-primary/15 to-transparent",
  male: "from-destructive/15 to-transparent",
  neutro: "from-muted to-transparent",
  tragico: "from-accent/20 to-transparent",
  redenzione: "from-accent/30 to-transparent",
};

function Personaggi() {
  return (
    <article className="mx-auto max-w-7xl px-6 py-20">
      <header className="mb-16 text-center">
        <p className="ornament mb-4">Capitolo IV</p>
        <h1 className="font-display text-5xl text-foreground md:text-7xl">I Personaggi</h1>
        <p className="mt-4 italic text-muted-foreground">a cura di Zucchini · Dumbrava · Dimitrisen</p>
        <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
          Nove figure che attraversano la Lombardia del Seicento — santi, prepotenti, codardi e convertiti.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {characters.map((c) => (
          <article key={c.n} className={`paper relative overflow-hidden rounded-sm p-7 transition hover:-translate-y-1`}>
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${sideColor[c.side]}`} />
            <div className="relative flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-card font-display text-3xl text-primary">
                {c.initial}
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight text-foreground">{c.n}</h3>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.25em] text-primary/80">{c.role}</p>
              </div>
            </div>
            <p className="relative mt-5 text-sm leading-relaxed text-foreground/80">{c.d}</p>
          </article>
        ))}
      </div>
    </article>
  );
}

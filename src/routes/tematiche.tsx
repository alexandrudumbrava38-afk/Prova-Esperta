import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tematiche")({
  head: () => ({
    meta: [
      { title: "Tematiche dei Promessi Sposi — Provvidenza, umili, forza reale" },
      { name: "description", content: "Le grandi tematiche del romanzo manzoniano: la Provvidenza, gli umili, la forza reale e la forza legale, il romanzo storico." },
      { property: "og:title", content: "Le tematiche dei Promessi Sposi" },
      { property: "og:description", content: "Provvidenza, umili, giustizia e potere nel capolavoro di Manzoni." },
    ],
  }),
  component: Tematiche,
});

const themes = [
  {
    glyph: "✟",
    t: "La Provvidenza",
    d: "Non è un semplice \"lieto fine\", ma una forza divina che interviene nelle vicende umane. Lucia vi si affida con fede cieca; Renzo impara a riconoscerla dopo mille errori; l'Innominato la incontra nel tormento della conversione. Manzoni suggerisce che Dio non evita il dolore ai giusti, ma lo trasforma in mezzo per una felicità più alta.",
  },
  {
    glyph: "✦",
    t: "Gli Umili",
    d: "Manzoni compie una rivoluzione letteraria mettendo al centro del romanzo due semplici contadini e non re o nobili. Per Renzo e Lucia la \"grande storia\" — guerre, carestie, leggi — è un peso che cala dall'alto e sconvolge le loro vite. Gli umili sono gli unici portatori di valori autentici: attraverso loro l'autore denuncia l'indifferenza dei potenti.",
  },
  {
    glyph: "⚖",
    t: "Forza reale vs Forza legale",
    d: "La forza reale è il potere arbitrario di don Rodrigo: violenza, bravi, impunità garantita dal rango. La forza legale sono le \"grida\", leggi pomposissime ma inefficaci. Avvocati come Azzecca-garbugli le usano per proteggere i potenti e imbrogliare gli ignoranti. La legge, invece di proteggere l'oppresso, diventa strumento di oppressione.",
  },
];

function Tematiche() {
  return (
    <article className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-16 text-center">
        <p className="ornament mb-4">Capitolo V</p>
        <h1 className="font-display text-5xl text-foreground md:text-7xl">Le Tematiche</h1>
        <p className="mt-4 italic text-muted-foreground">a cura di Caputo · Fernando · Rampani</p>
      </header>

      <section className="space-y-6">
        {themes.map((th, i) => (
          <article key={th.t} className="paper group relative overflow-hidden rounded-sm p-10">
            <span className="absolute right-6 top-4 font-display text-7xl text-primary/10 transition group-hover:text-primary/25">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-4xl text-accent-foreground/80">{th.glyph}</span>
              <h2 className="font-display text-3xl text-primary md:text-4xl">{th.t}</h2>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">{th.d}</p>
          </article>
        ))}
      </section>

      <section className="mt-24">
        <p className="ornament mb-6">Il Romanzo Storico</p>
        <div className="paper rounded-sm p-10">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">Storia e invenzione</h2>
          <div className="mt-6 space-y-5 text-foreground/85">
            <p className="drop-cap text-lg leading-relaxed">
              <em>I Promessi Sposi</em> è uno dei più importanti esempi di romanzo storico della letteratura italiana. Ambientato nel Seicento
              durante la dominazione spagnola in Lombardia, presenta uno sfondo storico ricostruito con grande precisione: Manzoni si documenta
              su fonti e cronache dell'epoca per descrivere eventi reali come la carestia, le rivolte popolari e soprattutto la terribile peste
              del 1630.
            </p>
            <p>
              All'interno di questo contesto reale si sviluppa una vicenda inventata: Renzo e Lucia sono personaggi di fantasia, ma credibili
              perché inseriti in una realtà concreta. Accanto a loro compaiono figure storiche realmente esistite, come il cardinale
              <strong> Federico Borromeo</strong>.
            </p>
            <p>
              Il narratore è onnisciente e interviene con commenti e giudizi: il romanzo non ha solo funzione narrativa ma anche educativa.
              Al centro vi sono fede, Provvidenza e fiducia nel bene. Anche la <strong>lingua</strong> è scelta consapevolmente: un italiano
              vicino al fiorentino parlato, comprensibile a un pubblico ampio.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

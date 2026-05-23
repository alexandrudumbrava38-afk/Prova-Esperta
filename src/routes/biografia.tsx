import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/manzoni-portrait.jpg";

export const Route = createFileRoute("/biografia")({
  head: () => ({
    meta: [
      { title: "Biografia di Alessandro Manzoni — Prova Esperta 2C INFO" },
      { name: "description", content: "La vita di Alessandro Manzoni: da Milano a Parigi, la conversione, le opere, la lingua e il Risorgimento." },
      { property: "og:title", content: "Biografia di Alessandro Manzoni" },
      { property: "og:description", content: "Dalla nascita milanese del 1785 al senatore del Regno: la vita dell'autore dei Promessi Sposi." },
    ],
  }),
  component: Biografia,
});

const timeline = [
  { y: "1785", t: "Nasce a Milano il 7 marzo, figlio ufficiale del conte Pietro Manzoni e di Giulia Beccaria." },
  { y: "1805", t: "Raggiunge la madre a Parigi: entra in contatto con gli Idéologues, eredi dell'Illuminismo." },
  { y: "1808", t: "Sposa Enrichetta Blondel, di religione calvinista." },
  { y: "1810", t: "Conversione al cattolicesimo: episodio di San Rocco, momento decisivo della sua vita." },
  { y: "1821-23", t: "Prima stesura del romanzo: Fermo e Lucia." },
  { y: "1827", t: "Pubblica la Ventisettana, prima edizione ufficiale dei Promessi Sposi." },
  { y: "1840-42", t: "Edizione definitiva (Quarantana) con la Storia della colonna infame." },
  { y: "1860", t: "Nominato senatore del Regno d'Italia." },
  { y: "1873", t: "Muore a Milano il 22 maggio. Verdi gli dedica la Messa da Requiem." },
];

const opere = [
  { t: "Inni sacri", d: "Espressione della nuova fede cattolica." },
  { t: "Odi civili", d: "Tra cui Il cinque maggio, dedicata alla morte di Napoleone." },
  { t: "Tragedie", d: "Il Conte di Carmagnola e Adelchi: il conflitto tra individuo e storia." },
  { t: "I Promessi Sposi", d: "Tre redazioni (1821-23, 1827, 1840): il romanzo fondativo della letteratura italiana moderna." },
];

function Biografia() {
  return (
    <article className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-16 text-center">
        <p className="ornament mb-4">Capitolo I</p>
        <h1 className="font-display text-5xl text-foreground md:text-7xl">Alessandro Manzoni</h1>
        <p className="mt-4 italic text-muted-foreground">Milano, 1785 — Milano, 1873</p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-primary/80">a cura di Porcu · D'Aleo · Lenzini</p>
      </header>

      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        <figure className="paper sticky top-24 rounded-sm p-2">
          <img src={portrait} alt="Ritratto di Alessandro Manzoni" loading="lazy" width={1024} height={1024} className="w-full" />
          <figcaption className="px-2 py-3 text-center text-xs italic text-muted-foreground">Alessandro Manzoni, ritratto editoriale.</figcaption>
        </figure>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p className="drop-cap">
            Alessandro Manzoni nasce a Milano il 7 marzo 1785. È ufficialmente figlio del conte Pietro Manzoni, ma si ritiene probabile che il
            suo vero padre sia Giovanni Verri. La madre, Giulia Beccaria, figlia del celebre illuminista Cesare Beccaria, si separa presto dal
            marito e si trasferisce a Parigi con il compagno Carlo Imbonati.
          </p>
          <p>
            Manzoni trascorre l'infanzia in collegi religiosi, dove riceve una solida formazione classica ma sviluppa anche una forte
            insofferenza verso la disciplina ecclesiastica. Nel 1805 raggiunge la madre a Parigi: qui entra in contatto con gli
            <em> Idéologues</em>, intellettuali eredi dell'Illuminismo interessati a filosofia, morale e storia.
          </p>
          <p>
            Nel 1808 sposa Enrichetta Blondel, di religione calvinista. Poco dopo, nel 1810, avviene la sua conversione al cattolicesimo:
            secondo un celebre episodio, durante i festeggiamenti parigini per il matrimonio di Napoleone, smarritosi nella folla, trova
            rifugio nella chiesa di San Rocco. Da quel momento vive un profondo cambiamento interiore.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 font-display text-2xl italic text-primary">
            «Un'Italia politicamente unita aveva bisogno anche di una lingua comune.»
          </blockquote>
          <p>
            Manzoni ebbe una vita segnata da lutti: perse la moglie Enrichetta e diversi figli. Nonostante il carattere schivo, divenne una
            figura simbolica del Risorgimento. Nel 1860 fu nominato senatore del Regno. Soffriva di agorafobia e di frequenti crisi nervose,
            che lo portarono a condurre una vita ritirata nella casa di via Morone a Milano.
          </p>
          <p>
            Muore a Milano il 22 maggio 1873. In suo onore, Giuseppe Verdi compose la celebre <em>Messa da Requiem</em>.
          </p>
        </div>
      </div>

      <section className="mt-24">
        <p className="ornament mb-6">Opere principali</p>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {opere.map((o) => (
            <div key={o.t} className="bg-card p-6">
              <h3 className="font-display text-2xl text-primary">{o.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <p className="ornament mb-6">Linea del tempo</p>
        <ol className="relative border-l-2 border-primary/30 pl-8">
          {timeline.map((e) => (
            <li key={e.y} className="relative mb-10">
              <span className="absolute -left-[2.6rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.6rem] font-semibold text-primary-foreground">●</span>
              <p className="font-display text-3xl text-primary">{e.y}</p>
              <p className="mt-1 text-foreground/85">{e.t}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}

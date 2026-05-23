import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="ornament left mb-4">Capitolo perduto</p>
        <h1 className="font-display text-7xl text-primary">404</h1>
        <p className="mt-3 text-muted-foreground">Questa pagina non esiste in alcuna edizione.</p>
        <Link to="/" className="mt-6 inline-flex rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Torna alla home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Qualcosa è andato storto</h1>
        <p className="mt-2 text-sm text-muted-foreground">Riprova oppure torna alla home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-sm bg-primary px-4 py-2 text-sm text-primary-foreground">Riprova</button>
          <a href="/" className="rounded-sm border border-input px-4 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Manzoni & I Promessi Sposi — Prova Esperta 2C INFO" },
      { name: "description", content: "Un viaggio interattivo nella vita di Alessandro Manzoni, ne I Promessi Sposi e nei luoghi della peste milanese del 1630." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/biografia", label: "Biografia" },
  { to: "/edizioni", label: "Edizioni" },
  { to: "/trama", label: "Trama" },
  { to: "/personaggi", label: "Personaggi" },
  { to: "/tematiche", label: "Tematiche" },
  { to: "/history-walk", label: "History Walk" },
] as const;

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold text-primary">Manzoni</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground sm:inline">Prova Esperta · 2C INFO</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="rounded-sm px-3 py-2 text-sm text-foreground/75 transition hover:text-primary"
              activeProps={{ className: "rounded-sm px-3 py-2 text-sm text-primary font-medium" }}
              activeOptions={{ exact: it.to === "/" }}
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="ornament left mb-4">Fine</p>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-2xl text-primary">I Promessi Sposi</p>
            <p className="mt-1 text-sm text-muted-foreground">Un progetto a cura della classe 2C INFO — Prova Esperta di Italiano & English.</p>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">MDCCCXXVII — MMXXVI</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

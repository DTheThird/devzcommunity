import Link from "next/link";
import { Plus, Github, ExternalLink, Sparkles, MapPin } from "lucide-react";

const MOCK_DEVS = [
  {
    username: "aristo",
    full_name: "Aristo Dimene",
    headline: "Full-Stack & Systems Developer",
    location: "Braga, PT",
    open_to_work: true,
    avatar_url: "https://avatars.githubusercontent.com/u/9919?v=4",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Haskell"],
    featured_project: {
      title: "Só Pedir Super App",
      description: "Plataforma de entregas e serviços urbanos desenhada para escalar.",
      repo_url: "https://github.com",
      live_url: "https://sopedir.mz",
    },
  },
  {
    username: "roger",
    full_name: "Roger",
    headline: "Frontend & UI Engineer",
    location: "Remote",
    open_to_work: true,
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    stack: ["React", "Tailwind", "Node.js", "Docker"],
    featured_project: {
      title: "DevCard CLI",
      description: "Gera cartões de visita no terminal a partir do teu perfil GitHub.",
      repo_url: "https://github.com",
      live_url: null,
    },
  },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Truly yours, your dev</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          O teu cartão de visita dev,{" "}
          <span className="text-emerald-400">pronto em minutos.</span>
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed">
          Cria o teu portfólio minimalista, destaca os teus melhores projetos e
          partilha um link único com empresas e com a comunidade.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold transition"
          >
            <Github className="w-4 h-4" />
            Criar o meu cartão
          </Link>
          <a
            href="#comunidade"
            className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium transition"
          >
            Explorar developers
          </a>
        </div>
      </section>

      <section id="comunidade" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Cartões em Destaque
            </h2>
            <p className="text-sm text-zinc-400">
              Developers e projetos ativos na comunidade
            </p>
          </div>

          <Link
            href="/dashboard?new=true"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-emerald-500/40 text-emerald-400 text-sm font-medium transition self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            Adicionar Projeto
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_DEVS.map((dev) => (
            <div
              key={dev.username}
              className="group rounded-xl bg-surface border border-border hover:border-zinc-700 p-6 flex flex-col justify-between transition"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={dev.avatar_url}
                        alt={dev.full_name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-emerald-500/40"
                      />
                      {dev.open_to_work && (
                        <span
                          title="Open to work"
                          className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-surface"
                        />
                      )}
                    </div>
                    <div>
                      <Link
                        href={`/${dev.username}`}
                        className="text-lg font-bold text-white group-hover:text-emerald-400 transition"
                      >
                        {dev.full_name}
                      </Link>
                      <p className="text-sm text-zinc-400">{dev.headline}</p>
                      <div className="flex items-center gap-1 text-xs text-zinc-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{dev.location}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/${dev.username}`}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
                  >
                    /{dev.username}
                  </Link>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {dev.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                      Projeto em Destaque
                    </span>
                    <div className="flex items-center gap-2 text-zinc-400">
                      {dev.featured_project.repo_url && (
                        <a
                          href={dev.featured_project.repo_url}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {dev.featured_project.live_url && (
                        <a
                          href={dev.featured_project.live_url}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm text-zinc-100">
                    {dev.featured_project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {dev.featured_project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <Link
            href="/dashboard?new=true"
            className="rounded-xl border-2 border-dashed border-zinc-800 hover:border-emerald-500/50 bg-zinc-950/40 hover:bg-zinc-900/40 p-6 flex flex-col items-center justify-center text-center min-h-[240px] gap-3 group transition"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 group-hover:bg-emerald-500/10 border border-zinc-800 group-hover:border-emerald-500/40 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-zinc-200 group-hover:text-white">
                Adiciona o teu cartão ou projeto
              </p>
              <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                Entra com GitHub e publica o teu portfólio em menos de 1 minuto.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

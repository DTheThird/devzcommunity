import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, MapPin, Plus } from "lucide-react";

export default function DevProfilePage({
  params,
}: {
  params: { username: string };
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar à comunidade
      </Link>

      <header className="rounded-2xl bg-surface border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt={params.username}
          className="w-28 h-28 rounded-full object-cover ring-4 ring-emerald-500/30 shrink-0"
        />

        <div className="flex-1 text-center sm:text-left space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white capitalize">
                {params.username}
              </h1>
              <p className="text-emerald-400 font-medium">
                Full-Stack Developer
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium self-center sm:self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Remote
            </span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            A construir software limpo e escalável. Cartão de visita individual
            (`/{params.username}`) pronto para ligar ao Supabase.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-zinc-400 pt-1">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Braga, Portugal
            </span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Projetos</h2>
          <Link
            href="/dashboard?new=true"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition"
          >
            <Plus className="w-4 h-4" />
            Novo Projeto
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-surface border border-border p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">Projeto Exemplo</h3>
              <div className="flex items-center gap-2 text-zinc-400">
                <Github className="w-4 h-4" />
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              Descrição breve do projeto, arquitetura e impacto.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                Next.js
              </span>
              <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                Supabase
              </span>
            </div>
          </div>

          <Link
            href="/dashboard?new=true"
            className="rounded-xl border-2 border-dashed border-zinc-800 hover:border-emerald-500/50 p-5 flex flex-col items-center justify-center text-center gap-2 text-zinc-400 hover:text-emerald-400 transition min-h-[140px]"
          >
            <Plus className="w-6 h-6" />
            <span className="text-xs font-medium">Adicionar projeto</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

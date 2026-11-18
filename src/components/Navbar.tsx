import Link from "next/link";
import { Terminal, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono font-bold text-sm sm:text-base tracking-tight text-white">
            devz<span className="text-emerald-400">community</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard?new=true"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs sm:text-sm text-zinc-200 transition"
          >
            <Plus className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Projeto</span>
          </Link>
          <Link
            href="/dashboard"
            className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs sm:text-sm font-semibold transition"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}

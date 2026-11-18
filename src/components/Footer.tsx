export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p className="font-mono">
          © {new Date().getFullYear()} devzcommunity
        </p>
        <p className="font-mono text-zinc-400 italic">
          “Truly yours, your dev”
        </p>
      </div>
    </footer>
  );
}

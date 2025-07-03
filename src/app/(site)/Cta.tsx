import { Crown } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-[#0F0F0F] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
          ⚔️ Deja de procrastinar. Empieza tu misión.
        </h2>
        <p className="mb-8 text-lg text-zinc-400 md:text-xl">
          Activa tu cuenta y conquista tu día con Mongawk. 👇
        </p>
        <a
          href="https://github.com/idee8/shipfree"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#FFB800] px-6 py-3 text-base font-medium text-black transition-colors hover:bg-[#FFB800]/90"
        >
          <Crown fill="#000000" className="w-5 h-5" />
          Empezar ahora 
        </a>
      </div>
    </section>
  );
}

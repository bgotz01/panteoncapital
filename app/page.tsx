export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0B0D] via-[#060607] to-[#030303] text-[#F5F2EA]">
      <div className="relative flex min-h-screen flex-col px-8 py-8 md:px-14">
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="text-xl font-light tracking-[-0.02em] text-[#D4D7DC] md:text-2xl">
            Panteon Capital
          </div>

          <nav className="flex gap-8 text-[11px] uppercase tracking-[0.32em] text-[#AEB5BF]">
            <a href="#" className="transition-colors hover:text-[#D4D7DC]">
              Research
            </a>
            <a href="#" className="transition-colors hover:text-[#D4D7DC]">
              Letters
            </a>
          </nav>
        </header>

        <section className="relative flex flex-1 items-center justify-center">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="relative z-10 max-w-xl bg-[#060607] px-8 text-center text-lg font-light leading-relaxed tracking-[0.02em] text-white/65 md:text-xl">
            We bet on inflection points.
          </p>
        </section>

      </div>
    </main>
  );
}
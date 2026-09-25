export default function Hero() {
  return (
    <section id="top" className="flex min-h-[70vh] flex-col items-start justify-center border-b border-black/10 dark:border-white/10 px-6">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 text-xs tracking-widest text-black/50 dark:text-white/50 uppercase">Portfolio</p>
        <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
          Sho Katsumata
        </h1>
        <p className="mt-4 max-w-xl text-base text-black/60 dark:text-white/60 sm:text-lg">
          Frontend Developer / テスト・UI/UX・アクセシビリティに関心があります。
        </p>
        <a
          href="#about"
          className="mt-8 inline-block border border-black px-5 py-2 text-sm tracking-widest uppercase transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
        >
          Scroll to explore
        </a>
      </div>
    </section>
  );
}

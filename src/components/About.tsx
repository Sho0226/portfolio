export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[200px_1fr]">
        <img
          src="/imgs/profile.jpeg"
          alt="Sho Katsumata"
          className="mx-auto h-48 w-48 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10"
        />
        <div>
          <p className="mb-2 text-xs tracking-widest text-black/50 dark:text-white/50 uppercase">About</p>
          <h2 id="about-heading" className="mb-1 text-3xl font-semibold">
            Sho Katsumata
          </h2>
          <p className="mb-6 text-sm tracking-widest text-black/50 dark:text-white/50 uppercase">
            Frontend Developer
          </p>
          <div className="space-y-4 text-base leading-relaxed text-black/80 dark:text-white/80">
            <p>
              株式会社PR TIMESに所属するソフトウェアエンジニア。フロントエンド開発をメインに、テストやUI/UX、アクセシビリティに関心があります。
            </p>
            <p>
              学生時代はプログラミングサークルでの活動、複数のハッカソン、長期インターンシップを通じて、TypeScriptを中心としたモダンなWeb開発の実践的スキルを磨きました。
            </p>
            <p>
              現在は、実ブラウザテストやアクセシビリティチェックで品質を担保しながら、誰にとっても使いやすいUIを届けるプロダクト開発に取り組んでいます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

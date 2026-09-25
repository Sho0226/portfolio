import { ArrowUpRight } from 'lucide-react';
import { articles } from '../data/articles';

export default function Blog() {
  return (
    <section id="blog" aria-labelledby="blog-heading" className="scroll-mt-20 border-t border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-2 text-xs tracking-widest text-black/50 dark:text-white/50 uppercase">Blog</p>
        <h2 id="blog-heading" className="mb-8 text-3xl font-semibold">
          Blog
        </h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 border border-black/10 dark:border-white/10 bg-white px-6 py-5 transition-colors hover:border-black dark:bg-neutral-900 dark:hover:border-white"
            >
              <span>
                <span className="mb-1 block text-xs tracking-widest text-black/40 dark:text-white/40 uppercase">
                  {article.source}
                </span>
                <span className="block text-base font-semibold">{article.title}</span>
                <span className="mt-1 block text-sm text-black/60 dark:text-white/60">{article.description}</span>
                <span className="sr-only">（新しいタブで開きます）</span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-black/40 dark:text-white/40 transition-colors group-hover:text-black dark:group-hover:text-white"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

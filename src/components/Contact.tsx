import { ArrowUpRight } from 'lucide-react';

const LINKS = [
  { href: 'https://twitter.com/sho_26_ts', label: 'Twitter' },
  {
    href: 'https://www.instagram.com/sho__nii?igsh=MWR2OGJ2Y3VnejdwZg%3D%3D&utm_source=qr',
    label: 'Instagram',
  },
  { href: 'https://github.com/Sho0226', label: 'GitHub' },
];

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 border-t border-black/10 bg-black text-white dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-2 text-xs tracking-widest text-white/50 uppercase">Contact</p>
        <h2 id="contact-heading" className="mb-8 text-3xl font-semibold">
          Get in touch
        </h2>
        <ul className="flex flex-wrap gap-4">
          {LINKS.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-white/20 px-4 py-2 text-sm transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                {label}
                <span className="sr-only">（新しいタブで開きます）</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-white/50 transition-colors group-hover:text-black"
                />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-xs text-white/60">&copy; {new Date().getFullYear()} Sho Katsumata</p>
      </div>
    </footer>
  );
}

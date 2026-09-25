import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Work } from '../data/works';

type Props = {
  work: Work;
  onClose: () => void;
};

// Uses the native <dialog> element via showModal(): focus trap, Escape
// handling, focus restoration, and inerting the rest of the page all come
// from the browser instead of hand-rolled listeners.
export default function WorkModal({ work, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const closeOnBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={closeOnBackdropClick}
      aria-labelledby="work-modal-title"
      className="m-auto max-h-[85vh] w-full max-w-lg overflow-y-auto bg-white p-0 dark:bg-neutral-900 dark:text-neutral-100"
    >
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 id="work-modal-title" className="text-xl font-semibold">
            {work.name}
          </h3>
          <button
            onClick={() => dialogRef.current?.close()}
            aria-label="閉じる"
            className="text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <img
          src={work.image}
          alt={`${work.name}のスクリーンショット`}
          className="mb-4 h-48 w-full border border-black/10 dark:border-white/10 object-cover"
        />
        <p className="mb-4 text-sm leading-relaxed text-black/80 dark:text-white/80">{work.fullDescription}</p>

        <h4 className="mb-2 text-xs font-semibold tracking-widest uppercase">使用技術</h4>
        <ul className="mb-4 flex flex-wrap gap-2">
          {work.technologies.map((tech) => (
            <li key={tech} className="border border-black/15 dark:border-white/15 px-2 py-1 text-xs">
              {tech}
            </li>
          ))}
        </ul>

        <div className="space-y-2 text-sm">
          {work.sourceCode && (
            <p>
              <span className="text-black/60 dark:text-white/50">ソースコード: </span>
              <a
                href={work.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {work.sourceCode}
                <span className="sr-only">（新しいタブで開きます）</span>
              </a>
            </p>
          )}
          {work.deploy && (
            <p>
              <span className="text-black/60 dark:text-white/50">デプロイ先: </span>
              <a
                href={work.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {work.deploy}
                <span className="sr-only">（新しいタブで開きます）</span>
              </a>
            </p>
          )}
          {work.note && (
            <p>
              <span className="text-black/60 dark:text-white/50">投稿記事: </span>
              <a
                href={work.note}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {work.note}
                <span className="sr-only">（新しいタブで開きます）</span>
              </a>
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
}

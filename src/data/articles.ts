type ArticleLink = {
  id: number;
  title: string;
  description: string;
  href: string;
  source: string;
};

export const articles: ArticleLink[] = [
  {
    id: 1,
    title: 'axe-coreの検出レベルを全深刻度に引き上げ、a11yを継続的に担保できるようにしました',
    description:
      'Storybook + axe-coreを導入し、検出レベルをCriticalのみから全深刻度に拡大した事例紹介。',
    href: 'https://developers.prtimes.com/2026/01/08/a11y-storybook/',
    source: 'PR TIMES Product Team',
  },
  {
    id: 2,
    title: '自動選択リストをリニューアルしてみえた、開発の難しさと楽しさ',
    description:
      'プレスリリース配信先を自動選択する機能のリニューアルを通じた、フロントエンド開発の実践的な課題と解決策。',
    href: 'https://developers.prtimes.com/2025/07/08/renewal-auto-media-list/',
    source: 'PR TIMES Product Team',
  },
  {
    id: 3,
    title: 'JSDOMの限界と実ブラウザテスト - Vitest Browser Mode実践',
    description: 'フロントエンドカンファレンス名古屋 2026 での登壇資料。',
    href: 'https://speakerdeck.com/sho0226/jsdomnoxian-jie-toshi-burauzatesuto-vitest-browser-modeshi-jian',
    source: 'Speaker Deck',
  },
];

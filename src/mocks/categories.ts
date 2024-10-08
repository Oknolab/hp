import { Category } from '@/types';

export const categories: Category[] = [
  {
    title: '研究室',
    articles: [
      {
        articleId: 'intro-abstract',
        title: '概要',
      },
      {
        articleId: 'intro-boss',
        title: '教員',
      },
      {
        articleId: 'intro-members',
        title: 'メンバー',
      },
      {
        articleId: 'intro-seminar',
        title: 'ゼミ',
      },
      {
        articleId: 'intro-self_seminar',
        title: '自主ゼミ',
      },
      {
        articleId: 'intro-activities',
        title: 'その他の活動',
      },
    ],
  },
  {
    title: '研究成果',
    articles: [
      {
        articleId: 'research-abstract',
        title: '概要',
      },
      {
        articleId: 'research-tourism',
        title: '観光情報学',
      },
      {
        articleId: 'research-archive',
        title: 'デジタルアーカイブ',
      },
      {
        articleId: 'research-software',
        title: 'ソフトウェア工学',
      },
      {
        articleId: 'research-other',
        title: 'その他',
      },
    ],
  },
];

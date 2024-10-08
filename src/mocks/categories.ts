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
        title: '先生はどんなひと？',
      },
      {
        articleId: 'intro-members',
        title: 'メンバーはどんなひと？',
      },
      {
        articleId: 'intro-seminar',
        title: 'ゼミはどんな感じ？',
      },
      {
        articleId: 'intro-self_seminar',
        title: '自主ゼミはどんな感じ？',
      },
      {
        articleId: 'intro-activities',
        title: 'その他の活動もある感じ？',
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

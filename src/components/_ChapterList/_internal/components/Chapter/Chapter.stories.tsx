import type { Meta, StoryObj } from '@storybook/react';

import { Chapter } from '.';

import { articleAbstracts } from '@/demos';

const meta = {
  title: 'OldChapterList/Chapter',
  component: Chapter,
  tags: ['autodocs'],
} satisfies Meta<typeof Chapter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    chapter: {
      title: '記事一覧',
      articles: articleAbstracts,
    },
  },
  render: (args) => (
    <div className="w-40 border">
      <Chapter {...args} />
    </div>
  ),
};

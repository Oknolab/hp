import type { Meta, StoryObj } from '@storybook/react';

import { ArticleList } from '.';

import { categories } from '@/mocks';

const meta = {
  title: 'ArticleNav/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    articles: categories[0].articles,
  },
};

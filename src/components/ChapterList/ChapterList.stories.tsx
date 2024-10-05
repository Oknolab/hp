import type { Meta, StoryObj } from '@storybook/react';

import { ChapterList } from '.';

import { chapters } from '@/demos';

const meta = {
  title: 'ChapterList/ChapterList',
  component: ChapterList,
  tags: ['autodocs'],
} satisfies Meta<typeof ChapterList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    chapters,
  },
};

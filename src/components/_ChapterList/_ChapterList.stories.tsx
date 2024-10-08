import type { Meta, StoryObj } from '@storybook/react';

import { _ChapterList } from '.';

import { chapters } from '@/demos';

const meta = {
  title: '_ChapterList/_ChapterList',
  component: _ChapterList,
  tags: ['autodocs'],
} satisfies Meta<typeof _ChapterList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    chapters,
  },
};

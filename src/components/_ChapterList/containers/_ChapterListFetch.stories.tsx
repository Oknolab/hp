import type { Meta, StoryObj } from '@storybook/react';

import { _ChapterListFetch } from '.';

const meta = {
  title: 'OldChapterList/ChapterListFetch',
  component: _ChapterListFetch,
  tags: ['autodocs'],
} satisfies Meta<typeof _ChapterListFetch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {};

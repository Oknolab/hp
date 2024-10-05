import type { Meta, StoryObj } from '@storybook/react';

import { ChapterListFetch } from '.';

const meta = {
  title: 'ChapterList/ChapterListFetch',
  component: ChapterListFetch,
  tags: ['autodocs'],
} satisfies Meta<typeof ChapterListFetch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {};

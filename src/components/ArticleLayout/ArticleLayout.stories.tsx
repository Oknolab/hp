import type { Meta, StoryObj } from '@storybook/react';

import { ArticleLayout } from '.';

import { Typography } from '@/components';

const meta = {
  title: 'ArticleLayout',
  component: ArticleLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    title: 'Sample Article',
    children: (
      <>
        <Typography>
          This is a sample article. This is a sample article. This is a sample article. This is a
        </Typography>
      </>
    ),
  },
};

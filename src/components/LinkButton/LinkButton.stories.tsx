import type { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from '.';

const meta = {
  title: 'LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
} satisfies Meta<typeof LinkButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    children: 'クリック',
    href: '#',
  },
};

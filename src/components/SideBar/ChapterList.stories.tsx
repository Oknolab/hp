import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from '.';

import { categories } from '@/demos';

const meta = {
  title: 'SideBar',
  component: SideBar,
  tags: ['autodocs'],
} satisfies Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    categories,
  },
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#eee' }],
    },
  },
};

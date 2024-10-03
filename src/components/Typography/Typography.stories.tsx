import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

const message = 'Hello, World!';

export const Body1: Story = {
  args: {
    children: message,
  },
};

export const H1: Story = {
  args: {
    variant: 'h1',
    children: message,
  },
};

export const Button: Story = {
  args: {
    variant: 'button',
    children: message,
  },
};
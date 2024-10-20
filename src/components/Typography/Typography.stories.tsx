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

export const H2: Story = {
  args: {
    variant: 'h2',
    children: message,
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: message,
  },
};

export const Button: Story = {
  args: {
    variant: 'button',
    children: message,
  },
};

export const Animation: Story = {
  render: () => (
    <>
      <Typography variant="h1">{message}</Typography>
      <Typography variant="h2">{message}</Typography>
      <Typography variant="h3">{message}</Typography>
      <Typography variant="body1">{message}</Typography>
    </>
  ),
};

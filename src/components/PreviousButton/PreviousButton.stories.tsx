import type { Meta, StoryObj } from '@storybook/react';

import { PreviousButton } from '.';

const meta = {
  title: 'PreviousButton',
  component: PreviousButton,
  tags: ['autodocs'],
} satisfies Meta<typeof PreviousButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};

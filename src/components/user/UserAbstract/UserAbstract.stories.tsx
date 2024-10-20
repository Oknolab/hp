import type { Meta, StoryObj } from '@storybook/react';

import { UserAbstract } from '.';

import { userDetails } from '@/demos';

const meta = {
  title: 'user/UserAbstract',
  component: UserAbstract,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserAbstract>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    user: userDetails[0],
  },
};

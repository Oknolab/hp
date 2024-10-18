import type { Meta, StoryObj } from '@storybook/react';

import { UserDetail } from '.';

import { Dialog } from '@/components';
import { userDetails } from '@/demos';

const meta = {
  title: 'user/UserDetail',
  component: UserDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    user: userDetails[0],
  },
  render: (args) => {
    return (
      <>
        <Dialog isOpen={true}>
          <UserDetail {...args} />
        </Dialog>
      </>
    );
  },
};

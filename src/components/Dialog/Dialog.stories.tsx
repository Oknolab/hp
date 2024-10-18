import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Dialog } from '.';

const meta = {
  title: 'Dialog/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
  render: (args) => {
    //TODO: 修正
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <button className="border p-2" onClick={() => setIsOpen(true)}>
          Open
        </button>
        <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>ダイアログの説明ですううううううううううう</p>
        </Dialog>
      </>
    );
  },
};

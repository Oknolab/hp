import type { Meta, StoryObj } from '@storybook/react';

import { ResearchDetail } from '.';

import { Dialog } from '@/components';
import { tourisms } from '@/mocks';

const meta = {
  title: 'research/ResearchDetail',
  component: ResearchDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResearchDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    research: tourisms[0],
  },
  render: (args) => {
    return (
      <>
        <Dialog isOpen={true}>
          <ResearchDetail {...args} />
        </Dialog>
      </>
    );
  },
};

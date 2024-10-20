import type { Meta, StoryObj } from '@storybook/react';

import { ResearchAbstract } from '.';

import { Dialog } from '@/components';
import { researchDetails } from '@/mocks';

const meta = {
  title: 'research/ResearchAbstract',
  component: ResearchAbstract,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResearchAbstract>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    research: researchDetails[0],
  },
};

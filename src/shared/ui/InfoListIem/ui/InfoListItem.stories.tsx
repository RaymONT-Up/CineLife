import type { Meta, StoryObj } from '@storybook/react';

import InfoListItem from './InfoListItem';

const meta = {
  title: 'shared/InfoListItem',
  component: InfoListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof InfoListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
  args: {
    children: 2023,
    name: 'Год',
  },
};

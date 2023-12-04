import type { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating';

const meta = {
  title: 'shared/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Great: Story = {
  args: {
    rating: 10,
  },
};
export const Medium: Story = {
  args: {
    rating: 6,
  },
};
export const Bad: Story = {
  args: {
    rating: 3,
  },
};
export const Empty: Story = {
  args: {
    rating: null,
  },
};

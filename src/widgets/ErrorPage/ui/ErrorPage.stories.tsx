import type { Meta, StoryObj } from '@storybook/react';
import ErrorPage from './ErrorPage';

const meta = {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
  },
};

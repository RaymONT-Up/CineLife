import type { Meta, StoryObj } from '@storybook/react';
import Loader, { LoaderTheme } from './Loader';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Classic: Story = {
  args: {
    theme: LoaderTheme.CLASSIC,
  },
};

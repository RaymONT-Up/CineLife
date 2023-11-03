import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './NotFoundPage';

const meta = {
  title: 'pages/NotFound',
  component: NotFoundPage,
  tags: ['autodocs'],

} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

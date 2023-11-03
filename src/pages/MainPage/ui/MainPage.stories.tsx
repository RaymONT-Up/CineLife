import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta = {
  title: 'pages/Main',
  component: MainPage,
  tags: ['autodocs'],

} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

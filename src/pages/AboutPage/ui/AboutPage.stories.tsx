import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';

const meta = {
  title: 'pages/About',
  component: AboutPage,
  tags: ['autodocs'],

} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

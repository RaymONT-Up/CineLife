import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/Profile',
  component: ProfilePage,
  tags: ['autodocs'],

} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

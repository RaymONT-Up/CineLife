import type { Meta, StoryObj } from '@storybook/react';
import PersonPage from './PersonPage';

const meta = {
  title: 'pages/Person',
  component: PersonPage,
  tags: ['autodocs'],

} satisfies Meta<typeof PersonPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

import type { Meta, StoryObj } from '@storybook/react';
import FilmPage from './FilmPage';

const meta = {
  title: 'pages/Film',
  component: FilmPage,
  tags: ['autodocs'],

} satisfies Meta<typeof FilmPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

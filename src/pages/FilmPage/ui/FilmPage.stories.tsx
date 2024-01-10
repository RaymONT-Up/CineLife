import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import FilmPage from './FilmPage';

const meta = {
  title: 'pages/Film',
  component: FilmPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/catalog/666']}>
        <Story />
      </MemoryRouter>
    ),

  ],

} satisfies Meta<typeof FilmPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

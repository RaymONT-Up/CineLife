import type { Meta, StoryObj } from '@storybook/react';
import CatalogPage from './CatalogPage';

const meta = {
  title: 'pages/Catalog',
  component: CatalogPage,
  tags: ['autodocs'],

} satisfies Meta<typeof CatalogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

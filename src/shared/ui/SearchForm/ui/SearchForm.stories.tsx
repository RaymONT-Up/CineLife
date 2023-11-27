import type { Meta, StoryObj } from '@storybook/react';
import SearchForm from './SearchForm';

const meta = {
  title: 'features/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const value = '';
const placeholder = 'placeholder';

export const Classic: Story = {
  args: {
    value,
    placeholder,
  },
};

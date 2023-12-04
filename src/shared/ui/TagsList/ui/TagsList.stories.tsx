import type { Meta, StoryObj } from '@storybook/react';
import TagsList, { TagsListTheme } from './TagsList';

const mockList1 = ['Драма', 'Триллер', 'Для взрослых'];
const mockList2 = ['Сша', 'Япония'];

const meta = {
  title: 'shared/TagsList',
  component: TagsList,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof TagsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BgBlur: Story = {
  args: {
    theme: TagsListTheme.bgBlur,
    list: mockList1,
  },
};
export const Medium: Story = {
  args: {
    theme: TagsListTheme.outline,
    list: mockList2,
  },
};

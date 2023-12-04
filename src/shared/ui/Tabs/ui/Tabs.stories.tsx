import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const TestComponent = () => (
  <>
    <h1>ReactComponent</h1>
    <div style={{ backgroundColor: 'blue' }}>inside we can use React components</div>
  </>
);

const mockTabsList = [
  {
    content: 'Обычный текст',
    id: 1,
    name: 'Текст',
  },
  {
    content: <TestComponent />,
    id: 2,
    name: 'Компонент ReactNode',
  },
];

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    TabsList: mockTabsList,
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
};

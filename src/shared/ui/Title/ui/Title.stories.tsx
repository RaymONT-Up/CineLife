import type { Meta, StoryObj } from '@storybook/react';

import Title, { TitleTags, TitleTheme } from './Title';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    Tag: TitleTags.h1,
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: {
    children: 'Hero title',
    theme: TitleTheme.hero,
  },
};
export const Centered: Story = {
  args: {
    // eslint-disable-next-line max-len
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit explicabo consequuntur laborum odit error quos in dicta aspernatur a!',
    centered: true,
    theme: TitleTheme.hero,
  },
};
export const Subtitle: Story = {
  args: {
    children: 'Subtitle',
    theme: TitleTheme.subtitle,
  },
};

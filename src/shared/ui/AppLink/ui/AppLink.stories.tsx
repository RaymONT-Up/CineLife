import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'text',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
  args: {
    theme: AppLinkTheme.CLASSIC,
  },
};

export const Button: Story = {
  args: {
    theme: AppLinkTheme.BUTTON,
  },
};

export const Clear: Story = {
  args: {
    theme: AppLinkTheme.CLEAR,
  },
};
export const NavLink: Story = {
  args: {
    theme: AppLinkTheme.NAV_LINK,
  },
};

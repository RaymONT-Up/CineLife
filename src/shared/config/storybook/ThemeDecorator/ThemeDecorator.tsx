import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {
  document.body.className = theme;

  return (
    <Story />
  );
};

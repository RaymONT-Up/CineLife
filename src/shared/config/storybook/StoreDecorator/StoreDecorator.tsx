import { Decorator } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator: Decorator = (Story) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);

import React from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { ModalProps } from './Modal'; // Adjust the import path based on your project structure

export default {
  title: 'shared/Modal',
  component: Modal,
} as Meta;

// Define the Template for the Modal component
const Template: Story<ModalProps> = (args) => <Modal {...args} />;

// Create different stories
export const OpenModal = Template.bind({});
OpenModal.args = {
  isOpen: true,
  children: 'This is an open modal',
  onClose: () => {
    console.log('Modal closed');
  },
};

export const ClosedModal = Template.bind({});
ClosedModal.args = {
  isOpen: false,
  children: 'This is a closed modal',
  onClose: () => {
    console.log('Modal closed');
  },
};

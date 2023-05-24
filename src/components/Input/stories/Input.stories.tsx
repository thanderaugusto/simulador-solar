'use client';
import { Meta, StoryObj } from '@storybook/react';

import { Input } from '../Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input
};

export default meta;

type Story = StoryObj<typeof Input>;
export const Basic: Story = {
  args: {
    label: 'Nome'
  }
};

export const Advanced: Story = {
  args: {
    label: 'Nome'
  }
};

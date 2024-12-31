import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant : 'primary',
    size : 'lg'
  },
  render : (args) => {
    return <Button {...args}>Click here!!</Button>
  }
};
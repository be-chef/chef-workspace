import type { Meta, StoryObj } from '@storybook/react';
import {Button} from './Button';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

/**
 * <Unstyled>
 * Guidelines to use Button component
 *
 *
 *
 *
 * # How to use button?
 *
 *
 *
 * ### 1. Import the Component
 * Import the component in the appropriate module.
 * 
 * ```
 * import {Button} from "@chef-workspace/slushy"
 * ```
 * 
 * ### 2. Using it in a Template
 * Insert the component in the appropriate template to render the desired component:
 * 
 * ```
 * <Button variant="primary" size="large" onClick={handleClick}>Submit</Button>
 * ```
 * 
 * 
 * # Playground
 * </Unstyled>
 */


const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger', 'warning', 'info', 'success', 'disabled'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['small', 'medium', 'large', 'xlarge'],
      control: {
        type: 'select',
      },
    }
  },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: 'Are you sure?',
    variant : 'primary',
    size : 'small'
  },
  render : ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>
  }
};

export const secondary: Story = {
  args: {
    buttonText: 'Are you sure?',
    variant : 'secondary',
    size : 'small'
  },
  render : ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>
  }
};

export const success: Story = {
  args: {
    buttonText: 'Are you sure?',
    variant : 'success',
    size : 'small'
  },
  render : ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>
  }
};

export const danger: Story = {
  args: {
    buttonText: 'Are you sure?',
    variant : 'danger',
    size : 'small'
  },
  render : ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>
  }
};

export const warning: Story = {
  args: {
    buttonText: 'Are you sure?',
    variant : 'warning',
    size : 'small'
  },
  render : ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>
  }
};

export const info: Story = {
  args: {
    buttonText: 'Are you sure?',
    variant : 'info',
    size : 'small'
  },
  render : ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>
  }
};

export const disabled: Story = {
  args: {
    buttonText: 'Are you sure?',
    variant : 'disabled',
    size : 'small'
  },
  render : ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>
  }
};
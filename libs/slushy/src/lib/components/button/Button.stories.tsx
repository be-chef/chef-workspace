import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

/**
 * <Unstyled>
 * [Source Code](https://github.com/modernatx-internal/monocle/tree/main/libs/shared/angular/foundry/src/lib/components/checkbox/) | [Design Guidelines](https://www.figma.com/design/tUEx9TdZ2PbX74VcICEhah/Spectrum-for-Productivity?node-id=16684-3948&t=9ftPXytPfYGDcErF-0)
 *
 *
 * Use checkboxes to allow users to switch individual settings or preferences, providing a clear on/off or true/false option.
 *
 *
 * # How to use mtxf-checkbox?
 *
 * storybook control dropdown
 *
 *
 * ### 1. Import the Component
 * Import the component in the appropriate module.
 * 
 * ```imports: [
 *   // other imports...
 *   CheckboxComponent
 * ],
 * ```
 * 
 * ### 2. Using it in a Template
 * Insert the component in the appropriate template to render the desired component:
 * 
 * ```
 * <mtxf-checkbox
 *      [text]="'Accept Terms and Conditions'">
 *      (checkedChange)="handler()"
 * </mtxf-checkbox>
 * ```
 * 
 * *Note*: Define the appropriate handler() in Parent component to bind to the checkedChange output of the Checkbox Component. For further details, click [here](https://angular.dev/guide/signals/model#implicit-change-events).
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
      options: ['sm', 'md', 'lg', 'xlg'],
      control: {
        type: 'select',
      },
    },
    states : {
      options : ['default','hover','active','disabled'],
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
    size : 'lg',
    states: 'active'
  },
  render : ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>
  }
};
import type { Meta, StoryObj } from '@storybook/react';
import { Slushy } from './slushy';

const meta: Meta<typeof Slushy> = {
  component: Slushy,
  title: 'Slushy',
};
export default meta;
type Story = StoryObj<typeof Slushy>;

export const Primary: Story = {
  args: {},
};

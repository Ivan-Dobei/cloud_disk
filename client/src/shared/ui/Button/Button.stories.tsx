import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Button, ButtonTheme} from './Button';

export default {
   title: 'shader/Button',
   component: Button,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
   children: 'text',
   theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
   children: 'text',
   theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
   children: 'text',
   theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];


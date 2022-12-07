import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {SideBar} from './SideBar';


export default {
   title: 'widgets/SideBar',
   component: SideBar,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

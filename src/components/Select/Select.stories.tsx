import React from 'react';
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";

export default {
    title: 'Select',
    component: Select
};

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const DefaultMode = Template.bind({})
DefaultMode.args = {
    value: 'none',
    onChange: (value: any) => {},
    items: [
        {value: 1, title: 'Mishka'},
        {value: 2, title: 'Dimych'},
        {value: 3, title: 'Sveta'},
    ]
}
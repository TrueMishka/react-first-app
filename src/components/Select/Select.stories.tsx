import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";

export default {
    title: 'Select',
    component: Select
};

const callBack = action('Value has been changed')

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return (
        <div>
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: '1', title: 'Mishka'},
                        {value: '2', title: 'Dimych'},
                        {value: '3', title: 'Sveta'},
                    ]}/>
        </div>
    )
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <div>
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: '1', title: 'Mishka'},
                        {value: '2', title: 'Dimych'},
                        {value: '3', title: 'Sveta'},
                    ]}/>
        </div>
    )
}

/*
const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const WithValue = Template.bind({})
WithValue.args = {
    onChange: callBack,
    value: '2',
    items: [
        {value: '1', title: 'Mishka'},
        {value: '2', title: 'Dimych'},
        {value: '3', title: 'Sveta'},
    ]
}
export const WithoutValue = Template.bind({})
WithoutValue.args = {
    //onChange: (value: any) => {},
    onChange: callBack,
    items: [
        {value: '1', title: 'Mishka'},
        {value: '2', title: 'Dimych'},
        {value: '3', title: 'Sveta'},
    ]
}*/

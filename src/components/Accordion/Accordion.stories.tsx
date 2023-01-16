import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
};
const callBack = action('collapsed/unCollapsed')
const onClickCallBack = action('click on item')
const callBacks = {callBack, onClickCallBack}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callBacks,
    titleValue: 'CollapsedMode',
    collapsedValue: true,
    items: []
}
export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    ...callBacks,
    titleValue: 'UnCollapsedMode',
    collapsedValue: false,
    items: [
        {value: 1, title: 'Mishka'},
        {value: 2, title: 'Dimych'},
        {value: 3, title: 'Sveta'},
    ]
}

export const ChangingMode = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={'ChangingMode'} collapsedValue={value} onChange={() => setValue(!value)}
                      onClick={onClickCallBack} items={[
        {value: 1, title: 'Mishka'},
        {value: 2, title: 'Dimych'},
        {value: 3, title: 'Sveta'},
    ]}/>
}

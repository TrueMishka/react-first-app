import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
};
const callBackClick = action('collapsed/unCollapsed')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: 'CollapsedMode',
    collapsedValue: true,
    onClick: callBackClick,
    items: [
        {title: 'Mishka', id: 1},
        {title: 'Dimych', id: 2},
        {title: 'Sveta', id: 3},
    ]
}

export const ChangingMode = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={'ChangingMode'} collapsedValue={value}
                      onClick={() => setValue(!value)} items={[
        {title: 'Mishka', id: 1},
        {title: 'Dimych', id: 2},
        {title: 'Sveta', id: 3},
    ]}/>
}

import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('on/off clicked')

export const OnMode = () => <OnOff onValue={true} setOnValue={callback}/>
export const OffMode = () => <OnOff onValue={false} setOnValue={callback}/>
export const ChangingMode = () => {
    const [value, setValue] = useState(true)
    return <OnOff onValue={value} setOnValue={(setValue)}/>
}

import React from 'react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'uncontrolled Rating',
    component: UncontrolledRating,
};
const callBack = action('click')

export const RatingUncontrolled = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>
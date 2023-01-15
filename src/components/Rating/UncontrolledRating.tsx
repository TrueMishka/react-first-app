import React, {useState} from "react";
import {RatingValueType} from "./Rating";
import PropTypes from "prop-types";

type PropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating: React.FC<PropsType> = ({defaultValue, onChange}) => {
    const [rating, setRating] = useState<RatingValueType>(defaultValue ? defaultValue : 0)

    return (
        <div>
            <Star selected={rating > 0} callBack={() => {
                setRating(1);
                onChange(1);
            }}/>
            <Star selected={rating > 1} callBack={() => {
                setRating(2);
                onChange(2);
            }}/>
            <Star selected={rating > 2} callBack={() => {
                setRating(3);
                onChange(3);
            }}/>
            <Star selected={rating > 3} callBack={() => {
                setRating(4);
                onChange(4);
            }}/>
            <Star selected={rating > 4} callBack={() => {
                setRating(5);
                onChange(5);
            }}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

const Star = (props: StarPropsType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <span onClick={onClickHandler}>
            {props.selected ? <b>Star </b> : 'Star '}
        </span>
    )
}
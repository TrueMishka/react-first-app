import React, {useState} from "react";

export const UnControlledRating = () => {
    const [rating, setRating] = useState(2)

    return (
        <div>
            <Star selected={rating > 0} callBack={() => setRating(1)}/>
            <Star selected={rating > 1} callBack={() => setRating(2)}/>
            <Star selected={rating > 2} callBack={() => setRating(3)}/>
            <Star selected={rating > 3} callBack={() => setRating(4)}/>
            <Star selected={rating > 4} callBack={() => setRating(5)}/>
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
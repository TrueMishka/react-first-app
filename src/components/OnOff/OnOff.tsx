import React, {useState, MouseEvent} from 'react';

type PropsType = {
    onValue: boolean
    setOnValue: (value: boolean) => void
}

export const OnOff:React.FC<PropsType> = ({onValue, setOnValue}) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: "2px",
        backgroundColor: onValue ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: "2px",
        backgroundColor: onValue ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: onValue ? 'green' : 'red'
    };

    const onButtonHandler = () => {
        setOnValue(!onValue);

    }
    const offButtonHandler = () => {
        setOnValue(!onValue);
    }

    return (
        <div>
            <button onClick={onButtonHandler} style={onStyle}>On</button>
            <button onClick={offButtonHandler} style={offStyle}>off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};
import React, {useState, MouseEvent} from 'react';

export const UnControlledOnOff = () => {

    const [on, setOn] = useState(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: "2px",
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: "2px",
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };

    const onButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setOn(true);

    }
    const offButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setOn(false);
    }

    return (
        <div>
            <button onClick={onButtonHandler} style={onStyle}>On</button>
            <button onClick={offButtonHandler} style={offStyle}>off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};
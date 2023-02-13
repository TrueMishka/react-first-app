import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateData() {
    // difficult counting
    console.log('generateData call')
    return 1
}

export const UseState = () => {
    console.log('UseState')

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    //const changer = (state: number) => state + 1

    return (
        <div>
            <button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
            {counter}
        </div>
    );
};
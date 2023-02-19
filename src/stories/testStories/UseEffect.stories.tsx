import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const UseEffectExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('UseEffectExample')

    useEffect(() => {
        //api.getUsers().then()
        //setInterval
        //indexDB
        //document.getElementId
        //document.title = 'User'

        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect only first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            <button onClick={() => setFake(fake + 1)}>Fake+</button>
        </div>
    );
};

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            console.log('tick - ' + counter)
            setCounter(prevState => prevState + 1)
        }, 1000)
    }, [])

    return (
        <div>
            Hello, counter - {counter}
        </div>
    );
};
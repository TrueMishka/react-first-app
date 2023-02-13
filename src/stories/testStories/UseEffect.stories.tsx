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


const generateTime = () => {
    let currentTime = new Date()
    return (`${
        currentTime.getHours() >= 10
            ? currentTime.getHours()
            : '0' + currentTime.getHours()
    }:${
        currentTime.getMinutes() >= 10
            ? currentTime.getMinutes()
            : '0' + currentTime.getMinutes()
    }:${
        currentTime.getSeconds() >= 10
            ? currentTime.getSeconds()
            : '0' + currentTime.getSeconds()}`)
}

export const ClockExample = () => {

    const [time, setTime] = useState(generateTime)

    useEffect(() => {
        setInterval(() => {
            /*let currentTime = new Date()
            setTime(`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`)*/
            setTime(generateTime)
        }, 1000)
    }, [])

    return (
        <div>
            Clock - {time}
        </div>
    )
}
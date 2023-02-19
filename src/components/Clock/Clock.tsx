import React, {useEffect, useState} from 'react';
import classes from "./Clock.module.css";

const get2DigitalTime = (num: number) => num >= 10 ? num : '0' + num

export type ClockPropsType = {
    clockMode: 'Analog' | 'Digital'
}

export const Clock:React.FC<ClockPropsType> = ({clockMode}) => {

    const [mode, setMode] = useState(clockMode)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {clearInterval(intervalId)}
    }, [])

    const digitalTime = `${get2DigitalTime(time.getHours())}:${get2DigitalTime(time.getMinutes())}:${get2DigitalTime(time.getSeconds())}`

    return (
        <div>
            <div>
                <button onClick={() => setMode('Analog')}>Analog</button>
                <button onClick={() => setMode('Digital')}>Digital</button>
            </div>
            {mode === 'Analog'
                ? <div className={classes.clock}>
                    <div
                        className={classes.hour_hand}
                        style={{
                            transform: `rotateZ(${time.getHours() * 30}deg)`
                        }}
                    />
                    <div
                        className={classes.min_hand}
                        style={{
                            transform: `rotateZ(${time.getMinutes() * 6}deg)`
                        }}
                    />
                    <div
                        className={classes.sec_hand}
                        style={{
                            transform: `rotateZ(${time.getSeconds() * 6}deg)`
                        }}
                    />
                    <span className={classes.twelve}>12</span>
                    <span className={classes.one}>1</span>
                    <span className={classes.two}>2</span>
                    <span className={classes.three}>3</span>
                    <span className={classes.four}>4</span>
                    <span className={classes.five}>5</span>
                    <span className={classes.six}>6</span>
                    <span className={classes.seven}>7</span>
                    <span className={classes.eight}>8</span>
                    <span className={classes.nine}>9</span>
                    <span className={classes.ten}>10</span>
                    <span className={classes.eleven}>11</span>
                </div>
                : <div className={classes.clockDigital}>
                    Clock - {digitalTime}
                </div>}
        </div>
    )
};
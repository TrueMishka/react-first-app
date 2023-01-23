import React, {useState, FocusEvent, KeyboardEvent, useEffect} from 'react';
import classes from "./Select.module.css";

export type ItemType = {
    value: any
    title: string
}
export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<boolean>(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onClickTitleHandler = () => {
        setActive(!active)
        setHoveredElementValue(props.value)
    }

    const onClickItemHandler = () => {
        props.onChange(hoveredElementValue)
        setActive(!active)
    }

    const onFocusHandler = (e: FocusEvent<HTMLDivElement>) => {
        active && setActive(!active)
    }

    const onMoveOnItems = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextElement = e.key === 'ArrowUp'
                        ? props.items[i-1]
                        : props.items[i+1]
                    if (nextElement) {
                        props.onChange(nextElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        } else if (e.key === 'Enter') {
            onClickItemHandler()
        }
    }

    return (
        <div className={classes.select} tabIndex={0} onBlur={onFocusHandler} onKeyDown={onMoveOnItems}>
            <span className={classes.main}
                  onClick={onClickTitleHandler}
            >
                {selectedItem && selectedItem.title}
            </span>
            {active &&
                <div className={classes.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={`${classes.item} ${hoveredItem === i ? classes.selected : ''}`}
                        onClick={onClickItemHandler}
                        key={i.value}
                    >
                        {i.title}
                    </div>)}
                </div>
            }
        </div>
    );
};
import React, {useState, FocusEvent} from 'react';
import classes from "./Select.module.css";

export type ItemType = {
    value: any
    title: string
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [valueSelect, setValueSelect] = useState(props.value)
    const onClickItemHandler = (title: any) => {
        setValueSelect(title)
        setCollapsed(!collapsed)
    }
    const onFocusHandler = (e: FocusEvent<HTMLDivElement>) => {
        !collapsed && setCollapsed(!collapsed)
    }
    return (
        <div className={classes.select} tabIndex={0} onBlur={onFocusHandler}>
            <div className={classes.selectTitle} onClick={() => setCollapsed(!collapsed)}>{valueSelect}</div>
            <div className={classes.selectOption}>
                {collapsed || props.items.map((i, index) => {
                    return (
                        <div className={classes.selectOptionItem} key={index}
                             onClick={() => onClickItemHandler(i.title)}
                        >
                            {i.title} - {i.value}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
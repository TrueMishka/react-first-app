import React from "react";

export type ItemType = {
    title: string
    id: number
}
export type AccordionPropsType = {
    titleValue: string
    /**
     * Elements that are showed when is opened. Each item should be ItemType
     */
    collapsedValue: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

const Accordion = (props: AccordionPropsType) => {
    const onClickTitleHandler = () => {
        props.onClick(!props.collapsedValue)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={onClickTitleHandler}/>
            {!props.collapsedValue && <AccordionBody items={props.items}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering');
    return <h3 onClick={(e) => props.onChange()}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
}
const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {props.items.length || undefined
                ? props.items.map(i => {
                    return <li key={i.id}>{i.title}</li>
                })
                : <span>Empty list</span>}
        </ul>
    );
}

export default Accordion;
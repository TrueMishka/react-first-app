import React from "react";

export type ItemType = {
    value: any
    title: string
}
export type AccordionPropsType = {
    titleValue: string
    /**
     * Elements that are showed when is opened. Each item should be ItemType
     */
    collapsedValue: boolean
    onChange: () => void
    onClick: (value: any) => void
    items: ItemType[]
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsedValue && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

// AccordionTitle

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering');
    return <h3 onClick={(e) => props.onChange()}>-- {props.title} --</h3>
}

// AccordionBody

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {props.items || undefined
                ? props.items.map((i, index) => <li key={index} onClick={() => {props.onClick(i.value)}}>{i.title}</li>)
                : <span>Empty list</span>}
        </ul>
    );
}

export default Accordion;
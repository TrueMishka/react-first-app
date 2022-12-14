import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsedValue: boolean
    onClick: (value: boolean) => void
}

const Accordion = (props: AccordionPropsType) => {
    const onClickTitleHandler = () => {
        props.onClick(!props.collapsedValue)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickTitleHandler}/>
            {!props.collapsedValue && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering');
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

const AccordionBody = () => {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;
import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsedValue: boolean
}

const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsedValue && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering');
    return <h3>{props.title}</h3>
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
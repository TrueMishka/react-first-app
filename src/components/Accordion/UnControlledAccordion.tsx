import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

const UnControlledAccordion:React.FC<AccordionPropsType> = ({titleValue}) => {

    const [collapsedValue, setCollapsedValue] = useState(true)
    const collapseHandler = () => {
        setCollapsedValue(!collapsedValue)
    }

    return (
        <div>
            <div>
                <AccordionTitle title={titleValue} collapseHandler={collapseHandler}/>
            </div>
            {!collapsedValue && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    collapseHandler: () => void
}

const AccordionTitle:React.FC<AccordionTitlePropsType> = ({collapseHandler, title}) => {
    console.log('AccordionTitle rendering');
    return <h3 onClick={collapseHandler}>{title}</h3>
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

export default UnControlledAccordion;
import React, {useReducer} from "react";
import {reducerUncontrolledAcc, TOGGLE_COLLAPSED} from "./ReducerUncontrolledAcc";

type AccordionPropsType = {
    titleValue: string
}

const UnControlledAccordion:React.FC<AccordionPropsType> = ({titleValue}) => {

    //const [collapsedValue, setCollapsedValue] = useState(true)
    const [state, dispatch] = useReducer(reducerUncontrolledAcc, {collapsed: false})

    const collapseHandler = () => {
        //setCollapsedValue(!collapsedValue)
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return (
        <div>
            <div>
                <AccordionTitle title={titleValue} collapseHandler={collapseHandler}/>
            </div>
            {!state.collapsed && <AccordionBody/>}
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
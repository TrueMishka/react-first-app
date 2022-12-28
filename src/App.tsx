import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";

const App = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [collapsedValue, setCollapsedValue] = useState<boolean>(true)
    const [onValue, setOnValue] = useState(true);

    return (
        <div className={'App'}>
            <PageTitle title='This is APP component'/>
            <h4>*----Controlled component----*</h4>
            <Accordion titleValue='--Menu--' collapsedValue={collapsedValue} onClick={setCollapsedValue}/>
            <Accordion titleValue='--Users--' collapsedValue={collapsedValue} onClick={setCollapsedValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff onValue={onValue} setOnValue={setOnValue}/>
            <OnOff onValue={onValue} setOnValue={setOnValue}/>
            <OnOff onValue={onValue} setOnValue={setOnValue}/>
            <h4>*----Uncontrolled component----*</h4>
            <UnControlledAccordion titleValue={'--Music--'}/>
            <UnControlledAccordion titleValue={'--Anime--'}/>
            <UnControlledRating/>
            <UnControlledOnOff/>
            <UnControlledOnOff/>
            <UnControlledOnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}

export default App;

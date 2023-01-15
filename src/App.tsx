import React, {useState} from 'react';
import './App.css';
import Accordion, {ItemType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";

const App = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [collapsedValue, setCollapsedValue] = useState<boolean>(true)
    const [onValue, setOnValue] = useState(true);
    const items: ItemType[] = [
        {title: 'Mishka', id: 1},
        {title: 'Dimych', id: 2},
        {title: 'Sveta', id: 3},
    ]

    return (
        <div className={'App'}>
            <PageTitle title='This is APP component'/>
            <h4>*----Controlled component----*</h4>
            <Accordion titleValue='--Menu--' collapsedValue={collapsedValue} onClick={setCollapsedValue} items={items}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff onValue={onValue} setOnValue={setOnValue}/>
            <OnOff onValue={onValue} setOnValue={setOnValue}/>
            <OnOff onValue={onValue} setOnValue={setOnValue}/>
            <h4>*----Uncontrolled component----*</h4>
            <UnControlledAccordion titleValue={'--Music--'}/>
            <UnControlledAccordion titleValue={'--Anime--'}/>
            <UncontrolledRating defaultValue={3} onChange={() => {}}/>
            <UncontrolledOnOff defaultOn={true} onChange={() => {}}/>
            <UncontrolledOnOff defaultOn={true} onChange={() => {}}/>
            <UncontrolledOnOff defaultOn={true} onChange={() => {}}/>
            <h4>*----Story book----* ?????????????</h4>
            <h4>*----Uncontrolled input----*</h4>
            <h4>*----Controlled input, FLUX----*</h4>
            <h4>*----Accordion with items inside props----*</h4>
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

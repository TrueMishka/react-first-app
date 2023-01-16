import React, {useState} from 'react';
import './App.css';
import Accordion, {ItemType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

const App = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [collapsedValue, setCollapsedValue] = useState<boolean>(true)
    const [onValue, setOnValue] = useState(true);
    const items: ItemType[] = [
        {value: 1, title: 'Mishka'},
        {value: 2, title: 'Dimych'},
        {value: 3, title: 'Sveta'},
    ]

    return (
        <div className={'App'}>
            <PageTitle title='This is APP component'/>
            <h4>*----Controlled component----*</h4>
            <Accordion titleValue='--Menu--' collapsedValue={collapsedValue} onChange={() => setCollapsedValue(!collapsedValue)} onClick={() => alert('hi')} items={items}/>
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
            <h4>*--------*</h4>
            <Select value={'none'} onChange={value => {}} items={items}/>
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

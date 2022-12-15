import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

const App = () => {
    return (
        <div>
            <PageTitle title='This is APP component'/>
            <PageTitle title='Hello my friend'/>
            <Rating value={2}/>
            <Accordion titleValue='--Menu--' collapsedValue={true}/>
            <Accordion titleValue='--Users--' collapsedValue={false}/>
            <Rating value={4}/>
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

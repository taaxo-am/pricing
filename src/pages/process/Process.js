import React from 'react';
import {Switch, Route} from "react-router-dom";

import TopDeals from "../../components/top-deals/TopDeals";

import './process.css'

import Breadcrumb from "./components/Breadcrumb";
import Home from "./components/Home";
import ModelList from "./components/ModelList";
import Questions from "./components/questions/Questions";

const Process = () => {
    return (
        <div className='container'>
            <Breadcrumb />

            <Switch>
                <Route exact path={'/process'}>
                    <Home/>
                </Route>

                <Route path='/process/models'>
                    <ModelList/>
                </Route>

                <Route path='/process/questions'>
                    <Questions/>
                </Route>
            </Switch>

            <div className='mb-5'>
                <TopDeals/>
            </div>
        </div>
    );
};

export default Process;

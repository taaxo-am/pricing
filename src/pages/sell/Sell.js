import React from 'react';
import {Switch, Route} from "react-router-dom";

import TopDeals from "../../components/top-deals/TopDeals";

import './sell.css'

import Breadcrumb from "./components/Breadcrumb";
import Home from "./components/Home";
import ModelList from "./components/ModelList";
import Questions from "./components/questions/Questions";

const Sell = ({match}) => {
    console.log(match)
    return (
        <div className='container'>
            <Breadcrumb />

            <Switch>
                <Route exact path={'/sell'}>
                    <Home/>
                </Route>

                <Route path='/sell/list'>
                    <ModelList/>
                </Route>

                <Route path={'/sell/questions'}>
                    <Questions/>
                </Route>
            </Switch>

            <div className='mb-5'>
                <TopDeals/>
            </div>
        </div>
    );
};

export default Sell;

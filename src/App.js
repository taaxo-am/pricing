import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Sell from "./pages/sell/Sell";
import Result from "./pages/sell/components/Result";
import ShippingAddress from "./pages/ShippingAddress";
import Thanks from "./pages/Thanks";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-light">
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/sell'>
                        <Sell/>
                    </Route>
                    <Route path='/result'>
                        <Result />
                    </Route>
                    <Route path='/shipping'>
                        <ShippingAddress/>
                    </Route>
                    <Route path='/thanks'>
                        <Thanks/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Process from "./pages/process/Process";
import Result from "./pages/result/Result";
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
                    <Route path='/process'>
                        <Process/>
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

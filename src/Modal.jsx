import React from 'react';
import Logo from "./Logo";
import RentList from "./RentList"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function ModalSwitch() {
    return (

        <Router>
            <Switch>
                <Route exact path="/gallery">
                    g
                </Route>
                <Route exact path="/contact">
                    c
                </Route>
                <Route exact path="/map">
                    m
                </Route>
                <Route exact path="/">
                    <div className="main">
                        <Logo />
                        <RentList />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default ModalSwitch


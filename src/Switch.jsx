import React from 'react';
import Logo from "./Logo";
import RentList from "./RentList"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Book from './Book';


function ModalSwitch() {
    return (
        <Router>
            <Switch>
                <Route exact path="/book/:id">
                    <Book />
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


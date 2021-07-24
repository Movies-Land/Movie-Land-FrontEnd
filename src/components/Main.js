import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import HomePage from './HomePage'
import Header from './Header';
import Footer from './Footer'
import Login from './Login'
import "../components(CSS)/Main.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


export class Main extends Component {
    render() {
    

        return (

            <div>
                <Router>
                    <Header />

                    <Switch>
              
                        <Route exact path="/">
                            <HomePage/>
                        </Route>

                        <Route exact path="/Profile">
                            {this.props.auth0.isAuthenticated ? <Profile /> : <Login />}
                        </Route>

                    </Switch>
                    <Footer />
                </Router>
            </div>

        )
    }

}


export default withAuth0(Main)


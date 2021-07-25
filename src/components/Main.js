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
import AboutUs from './AboutUs';


export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSearch: false,
            show: false
        }
    }

    handleShowSearch = () => {
        this.setState({
            showSearch: true,
            show: false
        })
    }

    handleCloseSearch = () => {
        this.setState({
            showSearch: false,
            show: true,
        })
    }

    handleShowHomePage = () => {
        this.setState({
            show: true
        })
    }

    render() {


        return (

            <div>
                <Router>
                    <Header handleCloseSearch={this.handleCloseSearch} />

                    <Switch>

                        <Route exact path="/">
                            <HomePage handleShowSearch={this.handleShowSearch} showSearch={this.state.showSearch} show={this.state.show} handleShowHomePage={this.handleShowHomePage} />
                        </Route>

                        <Route exact path="/Profile">
                            {this.props.auth0.isAuthenticated ? <Profile /> : <Login />}
                        </Route>
                        <Route exact path="/AboutUs">
                           <AboutUs />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>

        )
    }

}


export default withAuth0(Main)


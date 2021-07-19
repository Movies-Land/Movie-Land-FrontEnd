import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Login from './Login';

export class Main extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;

        return (
            <div>

                {isAuthenticated === true ? <Profile /> : <Login />}

            </div>
        )
    }
}

export default withAuth0(Main) 

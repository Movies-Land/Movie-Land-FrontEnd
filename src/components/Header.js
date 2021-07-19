import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


export class Header extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;

        return (
            <>
                {isAuthenticated === true ? <LogoutButton />: '' }

            </>
        )
    }
}

export default withAuth0(Header)

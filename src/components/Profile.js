import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(isAuthenticated);
    return (
      <>
        {isAuthenticated && (
          <>
            <div> {user.name}</div>
            <div> {user.email}</div>
            <img src={user.picture} alt={user.name} />
          </>
        )}
      </>
    );
  }
}

export default withAuth0(Profile);

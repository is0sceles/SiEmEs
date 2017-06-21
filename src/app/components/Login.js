import React from 'react';
import { Link } from 'react-router-dom';

/** Login Component */
export class Login extends React.Component {
  render() {
    return (
      <div id="loginPanel">
        <p className="lead"> Sign-in </p>
        <input id="username" type="text" name="username" placeholder="Username" />
        <br />
        <input id="password" type="password" name="password" placeholder="Password" />
        <br />
        <p className="lead continue"> continue without signing in </p>
        <Link to="/browse"> <button> Continue </button> </Link>
      </div>
    );
  }
}

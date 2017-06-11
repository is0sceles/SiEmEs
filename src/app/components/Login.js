import React from 'react';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
  render() {
    return (
      <div>
        <h5> Sign-in </h5>
        <input id="username" type="text" name="username" placeholder="Username" />
        <br />
        <input id="password" type="password" name="password" placeholder="Password" />
        <br />
        <p className="lead"> continue without signing in </p>
        <Link to="/browse"> <button> Continue </button> </Link>
      </div>
    );
  }
}

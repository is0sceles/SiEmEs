import React from 'react';
import { Link } from 'react-router-dom';


export class Header extends React.Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><Link to="/"> Home </Link> </li>
              <li><Link to="/admin"> Admin </Link> </li>
              <li><Link to="/browse"> Browse </Link> </li>
              <li><Link to="/profile"> Profile </Link> </li>
              <li><Link to="/login"> Login </Link> </li>
              <li><Link to="/card"> Card </Link> </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

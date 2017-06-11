import React from 'react';
import { Link } from 'react-router-dom';


export class Header extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><Link to="/"> Home </Link> </li>
              <li><Link to="#"> Admin </Link> </li>
              <li><Link to="/browse"> Browse </Link> </li>
              <li><Link to="/profile"> Profile </Link> </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

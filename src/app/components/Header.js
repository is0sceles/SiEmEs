import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#"> Home </a> </li>
              <li><a href="#"> Admin </a>   </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

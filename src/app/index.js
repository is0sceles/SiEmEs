import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Login } from './components/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <h3> <span id="logo"> SiEmEs </span> </h3>
              <p id="author"> isosceles ∆ </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Login />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


render(<App />, document.querySelector('#app'))
;

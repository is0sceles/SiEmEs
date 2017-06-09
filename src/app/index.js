import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <h3> something goes here... </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Home />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


render(<App />, document.querySelector('#app'))
;

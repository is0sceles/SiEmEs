import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Login } from './components/Login';
import { Card } from './components/ProfileCard';
import { Post } from './components/Post';
import { Profile } from './components/Profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


render(<App />, document.querySelector('#app'))
;

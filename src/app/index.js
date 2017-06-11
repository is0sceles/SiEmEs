/* React */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

/* Components */
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Card } from './components/ProfileCard';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { Browse } from './components/Browse';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Route exact path="/" component={Login} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/profile" component={Profile} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), document.querySelector('#app'),
);

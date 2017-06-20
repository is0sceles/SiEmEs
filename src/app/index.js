/** React- Redux */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

/** Components */
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Card } from './components/ProfileCard';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { Browse } from './components/Browse';
import { Admin } from './components/Admin';

import initState from '../reducers/initialState';

/** App Container */
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Route exact path="/" component={Login} />
              <Route exact path="/browse" component={Browse} posts={this.props.posts} />
              <Route exact path="/admin" component={Admin} />
              <Route path="/profile" component={Profile} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/** mapStateToProps & mapDispatchToProps */
const mapStateToProps = state => ({
  user: state.userReducer,
  posts: state.postsReducer,
});

const mapDispatchToProps = dispatch => ({
  setName: (name) => {
    dispatch(
      {
        type: 'SET_NAME',
        payload: name,
      });
  },
});

/** CreateStore */
const store = createStore(
  combineReducers({ /* userReducer, postsReducer*/ }),
  {},
  applyMiddleware(logger),
  );

store.subscribe(() => {
  console.log('store updated', store.getState());
});


/** Mount DOM */
render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>), document.querySelector('#app'),
);

/** Connect */
export default connect(mapStateToProps, mapDispatchToProps)(App);

console.log('initial State is ', initState); // deleteMe

import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/** Components */
import { Header } from './Header';
import { Login } from './Login';
import { Card } from './ProfileCard';
import { Post } from './Post';
import { Profile } from './Profile';
import { Browse } from './Browse';
import { Admin } from './Admin';

import * as actionCreators from '../../reducers/actions/actions';


/** App Container */
class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Route exact path="/" component={Post} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/admin" component={Admin} />
              <Route path="/profile" component={Profile} />
              <Route path="/card" component={Card} />
              <Route path="/login" component={Login} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


/** mapStateToProps & mapDispatchToProps */
const mapStateToProps = state => ({
  posts: state.postsReducer,
});

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

/** Connect */
const App = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Main);

export default App;

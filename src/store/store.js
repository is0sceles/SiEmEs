import { createStore, applyMiddleware, compose, bindAction } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from '../reducers/index';

// dummy data
import posts from '../data/posts';

/** default state */
const defaultState = {
  posts,
};

/** CreateStore */
const store = createStore(rootReducer,
  defaultState,
  compose(applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));

store.subscribe(() => {
  console.log('store updated', store.getState());
});


export default store;

import * as types from './actions/actionTypes';

function posts(state = [], action) {
  if (action.type === types.ADD_POST) {
    console.log('post reducer 1', types.ADD_POST);
    console.log('action is--> ', action);
  }
  console.log('posts reducer 1', state, action);
  return state;
}

export default posts;

import * as types from '../actions/actionTypes';

/** Reducers */

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ITEMS_IS_LOADING:
      return action;
    default:
      return state;
  }
};

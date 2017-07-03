import * as types from './actionTypes';
// import data from db

/** Actions */

export function getUser() {
  // return dispatch () {
  //   // fetch and handle user data

  // };
}

export function itemIsErrored(bool) {
  return {
    type: types.ITEMS_IS_ERRORED,
    payload: bool,
  };
}

export function itemsIsLoading(bool) {
  return {
    type: types.ITEMS_IS_LOADING,
    isLoading: bool,
  };
}
export function itemsFetchDataSuccess(items) {
  return {
    type: types.ITEMS_FETCH_DATA_SUCCESS,
    items,
  };
}

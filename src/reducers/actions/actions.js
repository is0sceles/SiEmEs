import * as types from './actionTypes';
// import data from db

/** Actions */

// add post
export function addPost(author, title, comment, image) {
  console.log('postdata action dispatched');
  return {
    type: types.ADD_POST,
    author,
    title,
    comment,
    image,
  };
}

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


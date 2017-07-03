import * as actions from './actions/actions';

const initialState = [
  {
    posts: true,
    postList: [1, 2, 3, 4, 5],
    id: 1,
    title: '',
    desc: '',
    text: '',
    author: '',
    date: new Date(),
    image: '',
  },
];

export default (state = initialState, actions) => {

};

import React from 'react';
import { Post } from './Post';

export class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyList: false,
      posts: [1, 2, 3, 4, 5],
    };
  }

  render() {
    if (this.state.emptyList === true) {
      return (
        <div>
          <h3> Sorry, there are no items to list </h3>
        </div>
      );
    }
    return (
      <div>
        {this.state.posts.map(i => <Post />)}
      </div>
    );
  }
}

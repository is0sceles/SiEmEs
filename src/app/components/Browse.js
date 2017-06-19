import React from 'react';
import { Post } from './Post';

export class Browse extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.posts === true) {
      return (
        <div>
          <h3> Sorry, there are no items to list </h3>
        </div>
      );
    }
    return (
      <div>
        {/* this.props.postList.map(i => <Post />)*/}
        <Post  />
      </div>
    );
  }
}

import React from 'react';
import { Post } from './Post';

export class Browse extends React.Component {
  render() {
    return (
      <div>
        <Post />
        <Post />
      </div>
    );
  }
}

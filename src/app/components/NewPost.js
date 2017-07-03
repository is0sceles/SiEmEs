import React from 'react';
import { ImageUpload } from './ImageUpload';

/** New Post Component */
export class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="contain newPost">
            <h4> TItle </h4>
            <p> Description/ Cateogry </p>
            <p> Author </p> <p> Date: {new Date()} </p>
            <textarea />
            <button type="btn btn-primary"> Save </button>
            <hr />
            <ImageUpload />
          </div>
        </div>
      </div>
    );
  }
}

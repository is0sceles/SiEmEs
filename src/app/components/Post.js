import React from 'react';
import { ImageUpload } from './ImageUpload';

/** Post Component */
export class Post extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="contain">
            <h4> TItle </h4>
            <p> Description/ Cateogry </p>
            <p> author </p> <p> date() </p>
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

import React from 'react';
import { ImageUpload } from './ImageUpload';

export class Post extends React.Component {
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
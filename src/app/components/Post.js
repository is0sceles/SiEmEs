import React from 'react';
import { ImageUpload } from './ImageUpload';

/** Post Component */
export class Post extends React.Component {
  componentDidMount() {
    console.log('MAIN/> props', this.props);
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="contain">
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
              <img className="postImage" src="https://pp.userapi.com/c543106/v543106641/12101/DR201Mx-Q_8.jpg" alt="profile_image" />
              <textarea type="text" ref="comment" placeholder="comment" />
              <input className="postAuthor" type="text" ref="author" placeholder="author" />
              <input className="postTitle" type="text" ref="title" placeholder="title" />
              <input className="postTags" type="text" ref="tags" placeholder="tags" />
              <input type="submit" hidden />
            </form>
            <button type="btn btn-primary" className="postButton" onClick={() => this.props.addPost()}> Save </button>
            <button type="btn btn-primary" className="postButton"> Clear </button>
            <hr />
            <ImageUpload />
          </div>
        </div>
      </div>
    );
  }
}

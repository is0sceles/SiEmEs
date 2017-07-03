import React from 'react';

export class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  _handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  _handleImageCancel(e) {
    e.preventDefault();

    this.setState({
      imagePreviewUrl: '',
      file: '',
    });

    /** remove from localStorage */
    window.localStorage.removeItem('file');
    console.log('cancel', window.localStorage);
  }

  _handleImageSave(e) {
    e.preventDefault();

    /** save to localStorage */
    window.localStorage.file = this.state.imagePreviewUrl;
    console.log('save', window.localStorage);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <div>
          <img src={imagePreviewUrl} />
          <button
            className="cancelButton"
            type="submit"
            onClick={e => this._handleImageCancel(e)}
          >Cancel</button>
          <button
            className="saveImageButton"
            type="submit"
            onClick={e => this._handleImageSave(e)}
          >Upload Image</button>
        </div>
        );
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

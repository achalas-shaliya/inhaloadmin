import React, { Component } from 'react';
import AvatarEditor from '../../../node_modules/react-avatar-edit';
import '../../pages/blogs-create/style.css';
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' }
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            // eslint-disable-next-line jsx-a11y/alt-text
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    {/* <button className="submitButton"
                        type="submit"
                        onClick={(e) => this._handleSubmit(e)}>Upload Image</button> */}
                </form>
                <div className="imgPreview">
                    <input className="fileInput"
                        type="file"
                        onChange={(e) => this._handleImageChange(e)}
                        // onChange={(e) =>this._handleSubmit(e)} 
                        />
                    {$imagePreview}
                </div>
            </div>
        );
    }
}

export default Editor;
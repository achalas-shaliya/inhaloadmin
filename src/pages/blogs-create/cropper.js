import React, { Component } from 'react';
import AvatarEditor from '../../../node_modules/react-avatar-edit';
import '../../pages/blogs-create/style.css';
class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' }
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

        if (file !== null) {
            e.preventDefault();
            // TODO: do something with -> this.state.file
            console.log('handle uploading-', this.state.file);
        }
    }
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            // eslint-disable-next-line jsx-a11y/alt-text
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">select an image to upload</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <label className="fileContainer">
                        <input
                            className="custom-file-input"
                            type="file"
                            onChange={(e) => this._handleImageChange(e)}
                        />
                    </label>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        );
    }
}

export default Editor;
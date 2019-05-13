import S3 from 'aws-sdk/clients/s3';
import React from 'react';
import '../../pages/blogs-create/style.css';
const key = require ('../../config/bucket');

var aid = key.AWSAccessKeyId;
var skey = key.AWSSecretKey;
var regn = key.region;

const generator = require('generate-password');
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
            console.log('handle uploading: ', this.state.file);
            this.cahngename(this.state.file);
        }

        reader.readAsDataURL(file)

        if (file !== null) {
            e.preventDefault();
            // TODO: do something with -> this.state.file
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

    cahngename = (file) => {
        console.log(file.name)
        var name = generator.generate({
            length: 10,
            numbers: true
        });
        console.log(aid+" {} "+skey+" {} "+regn);
        this.uploadfile(file, name+file.name);
    }

    uploadfile = (file, fname) => {
        const bucket = new S3(
            {
                accessKeyId: aid,
                secretAccessKey: skey,
                region: regn
            }
        );

        const params = {
            Bucket: 'inhalo-media',
            Key: fname,
            Body: file
        };

        //get respond of the server
        bucket.upload(params, function (err, data) {
            if (err) {
                alert('There was an error uploading your file: ' + err);
                return false;
            }

            alert('Successfully uploaded file.');
            console.log('Successfully uploaded file.');
            console.log(data)
            return true;
        });
    }
}

export default Editor;
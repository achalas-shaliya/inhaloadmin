import React, { Component } from 'react';
import AvatarEditor from '../../../node_modules/react-avatar-edit';


class Editor extends React.Component {

    onLoadSuccess = (imgInfo) => {
        console.log(imgInfo);
    }
    render() {
        return (
            <AvatarEditor
                width={300}
                height={200}
                border={50}
                borderRadius={70}
                scale={1.2}
            />
        );
    }
}

export default Editor;
import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';


class SuccessAlert extends Component {

    state = {
        isShow: false
    }


    render() {
        return (
            <div>
                {/* <button onClick={() => this.setState({ isShow: true })}>Alert</button> */}
                <SweetAlert
                    show={this.state.show}
                    title="Demo"
                    text="SweetAlert in React"
                    onConfirm={() => this.setState({ show: false })}
                />
            </div>
        );
    }
}
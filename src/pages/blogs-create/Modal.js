import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            backgroundColor: 'rgba(0,0,0,0.3)',
            bottom: 0,
            left: 0,
            padding: 50,
            position: 'fixed',
            right: 0,
            top: 0,
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 600,
            minHeight: 400,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    {this.props.children}
                    <div>
                        <Button variant="contained" color="secondary" id="close-button" onClick={this.props.onClose}>Close</Button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;

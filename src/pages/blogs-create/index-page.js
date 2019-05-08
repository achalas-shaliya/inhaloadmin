import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Modal from 'react-modal';
import Editor from './cropper';
import SweetAlert from './alerts'
import EmailEditor from '../../../node_modules/react-email-editor';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AnchorButton, Intent } from "@blueprintjs/core";
import { HeaderComponent } from 'src/components';
import { styles } from './styles';
import styled from 'styled-components';
import color from '@material-ui/core/colors/amber';
const sample = require('../../assets/sample.json');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #4169E1;
  color: #FFF;
  padding: 10px;
  display: flex;
  max-height: 40px;
  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }
  button {
    flex: 1;
    padding: 0px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #FFF;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
  `
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');


class BlogCreateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange = (e) => event => {
    this.setState({
      [e]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (

      <div className={classes.root}>
        <CssBaseline />
        <HeaderComponent title='Create Blog' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography gutterBottom={true} component="h2">
            <Bar>
              <h1></h1>
              <button onClick={this.exportHtml}>Export html</button>
              <button onClick={this.openModal}>Save Design</button>
            </Bar>
            <Container>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                closeTimeoutMS={2000}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div
                  className="inner-container"
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}>
                  <div className="sub-header">Drag an Image</div>
                  <Editor />
                  <TextField
                    id="outlined-name"
                    label="Title"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('Title')}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax="4"
                    value={this.state.multiline}
                    onChange={this.handleChange('Description')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-name"
                    label="keyword"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('Title')}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div id="parent-div-button">
                  <Button variant="contained" color="primary" id="modal-button-save" className="button-container">Submit</Button>
                </div>
              </Modal>
              <EmailEditor
                ref={editor => this.editor = editor}
                minHeight='820px'
              />
            </Container>
          </Typography>
        </main>
      </div>
    );
  }

  toggleModal = () => {
    this.setState({
      modelIsOpen: false
    });
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exporthtml', html)
    })
  }
  saveDesign = () => {
    this.editor.saveDesign(design => {
      // console.log('saveDesign', design)
    })
  }
  onLoad = () => {
    this.editor.loadDesign(sample)
  }
  onDesignLoad = (data) => {
    console.log('onDesignLoad', data)
  }
}


export const BlogCreatePage = withStyles(styles)(BlogCreateIndex);

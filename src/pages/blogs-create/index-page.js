import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import List from '@material-ui/core/List';

import EmailEditor from '../../../node_modules/react-email-editor';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AnchorButton, Intent } from "@blueprintjs/core";

import { HeaderComponent } from 'src/components';
import Modal from './Modal'
// import { mainListItems, secondaryListItems } from './listItems';
// import SimpleLineChart from './SimpleLineChart';
// import SimpleTable from './SimpleTable';
import { styles } from './styles';
import styled from 'styled-components';
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
const style = {
  textfield: {
    width: 10
  },
  textArea: {
    height: 200,
    fontSize: "3em"
  }
};

class BlogCreateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = { isOpen: false };
  }

  onFileLoad(e) {
    const file = e.currentTarget.files[0];
    let filereader = new FileReader();
    filereader.onload = () => {
      console.log("Image Loaded : ", filereader.result);
    }

    filereader.onabort = () => {
      alert("Reading Aborted!");
    }

    filereader.onerror = () => {
      alert("Reading Error!");
    }

    filereader.readAsDataURL(file);
  }

  handleChange = (e) => event => {
    this.setState({
      [e]: event.target.value,
    });
  };

  state = {
    open: true,
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
              <button onClick={this.saveDesign} onClick={this.toggleModal} >Save Design</button>
            </Bar>
            <Container>
              <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                <div
                  className="inner-container"
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}> <div className="sub-header">Drag an Image</div>
                  <div className="draggable-container">
                    <input
                      type="file"
                      id="file-browser-input"
                      name="file-browser-input"
                      ref={input => this.fileInput = input}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onDrop={this
                        .onFileLoad
                        .bind(this)}
                      onChange={this
                        .onFileLoad
                        .bind(this)}
                    />
                    <div className="files-preview-container"></div>
                    <div className="helper-text">Drag and Drop Images Here</div>
                    <div className="file-browser-container">
                      <AnchorButton
                        text="Browse"
                        intent={Intent.PRIMARY}
                        minimal={true}
                        onClick={() => this.fileInput.click()} />
                    </div>
                  </div>
                  {/* <AnchorButton text="Upload" intent={Intent.SUCCESS} /> */}
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
                </div>
                <Button variant="contained" color="primary" id="save-button" className={classes.button}>Save</Button>
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
      isOpen: !this.state.isOpen
    });
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      // console.log('exporthtml', html)
    })
  }
  saveDesign = () => {
    this.editor.saveDesign(design => {
      console.log('saveDesign', design)
    })
  }
  onLoad = () => {
    // this.editor.loadDesign(sample)
  }
  onDesignLoad = (data) => {
    // console.log('onDesignLoad', data)
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}


export const BlogCreatePage = withStyles(styles)(BlogCreateIndex);

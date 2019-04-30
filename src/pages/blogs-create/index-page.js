import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';

import EmailEditor from '../../../node_modules/react-email-editor';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { HeaderComponent } from 'src/components';
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


class BlogCreateIndex extends React.Component {
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
              <button onClick={this.saveDesign}>Save Design</button>
            </Bar>
            <Container>
              <EmailEditor
                ref={editor => this.editor = editor}
                minHeight='820px'
                onLoad={this.onLoad}
              />
            </Container>
          </Typography>
        </main>
      </div>
    );
  }
  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
        // console.log('exporthtml', html)
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
    // console.log('onDesignLoad', data)
  }
}


export const BlogCreatePage = withStyles(styles)(BlogCreateIndex);

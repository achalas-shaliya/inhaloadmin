import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { HeaderComponent } from 'src/components';
import { styles } from './styles';
import { BlogLoaderComponent } from '../../components';

class BlogIndex extends React.Component {
  state = {
    open: true,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <HeaderComponent title='Blog' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography gutterBottom={true} component="h2">
            <BlogLoaderComponent />
            <BlogLoaderComponent />
            <BlogLoaderComponent />
            <BlogLoaderComponent />
          </Typography>
        </main>
      </div>
    );
  }
}

export const BlogPage = withStyles(styles)(BlogIndex);

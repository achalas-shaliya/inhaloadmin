import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { ReviewCardComponent } from '../card';
import { styles } from './styles';



class BlogLoader extends React.Component {
  state = {
    open: true,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} mt={1}>
        <Grid container spacing={24} >
          <Grid item xs={3}>
            <ReviewCardComponent />
          </Grid>
          <Grid item xs={3}>
            <ReviewCardComponent />
          </Grid>
          <Grid item xs={3}>
            <ReviewCardComponent />
          </Grid>
          <Grid item xs={3}>
            <ReviewCardComponent />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const BlogLoaderComponent = withStyles(styles)(BlogLoader);

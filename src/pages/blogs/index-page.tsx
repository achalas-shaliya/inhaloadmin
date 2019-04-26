import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import * as React from 'react';
import { HeaderComponent } from 'src/components';
// import { mainListItems, secondaryListItems } from './listItems';
// import SimpleLineChart from './SimpleLineChart';
// import SimpleTable from './SimpleTable';
import { styles } from './styles';

class BlogIndex extends React.Component<WithStyles<typeof styles>> {
  public state = {
    open: true,
  };

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <HeaderComponent title='Blog' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography gutterBottom={true} component="h2">
            Blog
          </Typography>
        </main>
      </div>
    );
  }
}

export const BlogPage = withStyles(styles)(BlogIndex);

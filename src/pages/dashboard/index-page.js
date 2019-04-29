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

class DashboardIndex extends React.Component {
  state = {
    open: true,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <HeaderComponent title='Dashboard' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography gutterBottom={true} component="h2">
            parana
                    </Typography>
          {/* <Typography variant="h4" gutterBottom={true} component="h2">
            Orders
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            { <SimpleLineChart /> }
          </Typography>
          <Typography variant="h4" gutterBottom={true} component="h2">
            Products
          </Typography>
          <div className={classes.tableContainer}>
            { <SimpleTable /> }
          </div> */}
        </main>
      </div>
    );
  }
}

export const DashboardPage = withStyles(styles)(DashboardIndex);

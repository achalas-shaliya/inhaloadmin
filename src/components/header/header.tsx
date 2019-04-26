import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import * as classNames from 'classnames';
import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {NavigationMenuComponent} from 'src/components';
import {WrapperComponent} from '../wrapper/wrapper';
import {styles} from './styles';

class Header extends React.Component<any & WithStyles<typeof styles>, any> {
    public state = {
        logout: false,
        open: true,
    };

    public render() {
        const {logout} = this.state;
        if (logout) {
            return <Redirect to='/login'/>
        }

        const {classes} = this.props;
        return (
            <WrapperComponent>
                <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(
                                classes.menuButton,
                                this.state.open && classes.menuButtonHidden,
                            )}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap={true}
                            className={classes.title}
                        >
                            {this.props.title}
                        </Typography>
                        <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <NavigationMenuComponent/>
                    <Divider/>
                    {/* <List>{secondaryListItems}</List> */}
                </Drawer>
            </WrapperComponent>
        )
    }

    private handleLogout = () => {
        localStorage.clear();
        this.setState({logout: true})
    }

    private handleDrawerOpen = () => {
        this.setState({open: true});
    };

    private handleDrawerClose = () => {
        this.setState({open: false});
    };
}

export const HeaderComponent = withStyles(styles)(Header);

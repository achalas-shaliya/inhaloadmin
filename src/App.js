import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { PrivateRoute } from 'src/components';
import './App.css';
import { BlogCreatePage, BlogPage, DashboardPage, LoginPage } from './pages';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact={true} path='/' component={DashboardPage} />
                    <Route exact={true} path='/login' component={LoginPage} />
                    <PrivateRoute path='/dashboard' component={DashboardPage} />
                    <PrivateRoute path='/blogs' component={BlogPage} />
                    <PrivateRoute path='/blogcreate' component={BlogCreatePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

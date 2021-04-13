import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Containers
import MainLayout  from '../containers/MainLayout/MainLayout';

/**
 * App Component
 * Application is initiated from the App Component
 * 
 */
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Suspense>
                    <Switch>
                        <Route path="/" name="Home" component={MainLayout} />
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        );
    }
}

export default App;

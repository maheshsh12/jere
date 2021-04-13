import React, { Component, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

// routes config
import routes from '../../Routes.js';
  
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

class TheContent extends Component {
    render() {
        return (
            <Container>
                <Suspense fallback={loading}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )} />
                            )
                        })}
                    </Switch>
                </Suspense>
            </Container>
        )
    }
}
export default TheContent;

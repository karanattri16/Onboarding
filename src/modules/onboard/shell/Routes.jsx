import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routesList from './routesList';

function Routes() {
  const getRoutes = () => {
    return routesList.map(route => (
      <Route exact path={route.path} component={route.component} key={route.id} />
    ));
  };

  return (
    <Router>
      <Switch>{getRoutes()}</Switch>
    </Router>
  );
}

export default Routes;

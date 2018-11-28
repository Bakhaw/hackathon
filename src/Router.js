import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Register from './screens/Register';

function Router() {
  return (
    <HashRouter>
      <Fragment>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home} />
        </Switch>
      </Fragment>
    </HashRouter>
  );
}

export default Router;

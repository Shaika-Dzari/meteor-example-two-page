import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/components/index.jsx';
import { One } from '../../ui/pages/one.jsx';
import { Two } from '../../ui/pages/two.jsx';
import { NotFound } from '../../ui/pages/not-found.jsx';

Meteor.startup( () => {
  render( 
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/one" component={ One } />
        <Route path="/two" component={ Two } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>, 
    document.getElementById( 'app' ) 
  );
});
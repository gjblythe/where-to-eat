import React from 'react';
import {Route, Switch} from 'react-router';
import Search from './search/Search';
import Settings from './settings/Settings';

export default () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <Search/>
      </Route>
      <Route path={'/settings'}>
        <Settings/>
      </Route>
    </Switch>
  );
}
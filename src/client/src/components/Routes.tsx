import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import Login from './SignIn';
import Search from './search/Search';
import Settings from './settings/Settings';

interface IProps {
  user: firebase.default.User;
  loading: boolean;
}

export default ({user, loading}: IProps) => {
  return (
    <Switch>
      <Route exact path={'/'}>
        {user ? <Search loading={loading} user={user}/> : <Redirect to={'/login'}/>}
      </Route>
      <Route path={'/settings'}>
        {user ? <Settings user={user}/> : <Redirect to={'/login'}/>}
      </Route>
      <Route to={'/login'}>
        {!user ? <Login loading={loading}/> : <Redirect to={'/'}/>}
      </Route>
    </Switch>
  );
}
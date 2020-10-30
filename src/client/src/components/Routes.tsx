import firebase from 'firebase';
import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import Login from './Login';
import Search from './search/Search';
import Settings from './settings/Settings';

interface IProps {
  user: firebase.User | null;
}

export default ({user}: IProps) => {
  return (
    <Switch>
      <Route exact path={'/'}>
        {user !== null ? <Search/> : <Redirect to={'/login'}/>}
      </Route>
      <Route path={'/settings'}>
        <Settings/>
      </Route>
      <Route to={'/login'}>
        <Login user={user}/>
      </Route>
    </Switch>
  );
}
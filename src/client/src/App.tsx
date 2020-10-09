import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Routes from './components/Routes';
import Search from './components/search/Search';
import Settings from './components/settings/Settings';

export default () => {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
    </>
  );
};

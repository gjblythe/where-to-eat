import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';

export default () => {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
    </>
  );
};

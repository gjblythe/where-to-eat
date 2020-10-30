import auth from 'firebase';
import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import cyan from '@material-ui/core/colors/cyan';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';

export default () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const user = auth.auth().currentUser;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: cyan,
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Routes user={user}/>
      </Router>
    </ThemeProvider>
  );
};

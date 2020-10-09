import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';

export default () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Routes/>
      </Router>
    </ThemeProvider>
  );
};

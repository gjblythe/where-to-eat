import firebase from 'firebase';
import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import cyan from '@material-ui/core/colors/cyan';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export default () => {
  const [user, loading] = useAuthState(auth)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
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
        <Routes user={user} loading={loading}/>
      </Router>
    </ThemeProvider>
  );
};

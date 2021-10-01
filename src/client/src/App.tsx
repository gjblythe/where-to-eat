import firebase from 'firebase';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default () => {
  const [user, loading] = useAuthState(auth)
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
    createMuiTheme({
        palette: {
          type: mode
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Routes user={user} loading={loading}/>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

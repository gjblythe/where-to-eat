import firebase from 'firebase';
import { Button, Card, CardHeader, Container, Link, makeStyles, Theme} from '@material-ui/core';
import React from 'react';
import AppPage from './AppPage';
import LoadingSpinner from './shared/LoadingSpinner';

interface IProps {
  loading: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  google: {
    margin: theme.spacing(2),
  },
}));

export default ({loading}: IProps) => {
  const classes = useStyles();
  const auth = firebase.auth();
  const signUpWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <AppPage title={'Login'}>
      <Container className={classes.form} maxWidth={'xs'}>
        {loading 
          ?
            <LoadingSpinner/>
          :
            <Card className={classes.card}>
              <CardHeader title={'Sign In'} />
              {/* this is where we can change auth methods */}
              <Link
                className={classes.google}
                onClick={signUpWithGoogle}
                color={'primary'}
              >
                Sign in using Google
              </Link>
            </Card>
          }
        </Container>
    </AppPage>
  );
};

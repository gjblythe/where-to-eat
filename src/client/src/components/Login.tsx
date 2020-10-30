import firebase from 'firebase';
import { Button, Card, Container, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AppPage from './AppPage';
import SignUp from './signup/SignUp';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
   margin: theme.spacing(2),
   padding: theme.spacing(1),
  },
  fields: {
    marginBottom: theme.spacing(2),
  },
}));

interface IProps {
  user: firebase.User | null;
}
interface ICredentials {
  email: string;
  password: string;
}

export default ({user}: IProps) => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState<ICredentials>({email:'', password:''});
  const [error, setError] = React.useState('');

  const login = () => {
    const {email, password} = credentials;

    const request = firebase.auth().signInWithEmailAndPassword(email, password);
    request.catch((error) => {
    if (error) {
      setError(error.message)
    }});
  }

  return (
    <AppPage title={'Login'}>
      <Container maxWidth={'xs'}>
        <Card className={classes.form}>
          <TextField 
            fullWidth
            className={classes.fields}
            type={'email'}
            placeholder={'Email'}
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          />
          <TextField
            fullWidth
            className={classes.fields}
            type={'password'}
            placeholder={'Password'}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
          {error && <Typography color={'error'}>{error}</Typography>}
          <Button 
            fullWidth
            onClick={login}
            color={'primary'}
            variant={'contained'}
          >
            Login
          </Button>
          <SignUp/>
        </Card>
      </Container>
    </AppPage>
  );
};

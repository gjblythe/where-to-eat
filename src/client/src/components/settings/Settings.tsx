import { Container, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react';
import AppPage from '../AppPage';
import ThemeButton from './ThemeButton';

interface IProps {
  user: firebase.default.User;
}
const useStyles = makeStyles((theme: Theme) => ({
  form: {
   margin: theme.spacing(2),
   padding: theme.spacing(1),
  },
}));

export default ({user}: IProps) => {
  const classes = useStyles();

  return (
    <AppPage title={'Settings'} user={user}>
      <Container maxWidth={'md'}>
        <Paper className={classes.form}>
          <Grid container>
            <ThemeButton/>
          </Grid>
        </Paper>
      </Container>
    </AppPage>
  );
};

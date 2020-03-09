import {AppBar, makeStyles, Theme, Toolbar, Typography} from '@material-ui/core';
import React from 'react';

interface IProps {
  message: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}))

export default ({message}: IProps) => {
  const classes = useStyles();
  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        <Typography className={classes.title} variant={'h6'}>
          Where To Eat
        </Typography>
        {message}
      </Toolbar>
    </AppBar>
  );
};

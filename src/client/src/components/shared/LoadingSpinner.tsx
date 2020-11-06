import { CircularProgress, makeStyles, Theme } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    right: '50%'
  },
}));

export default () => {
  const classes = useStyles()
  return (
    <CircularProgress className={classes.root}/>
  );
};

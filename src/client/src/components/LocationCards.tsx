import {Card, CardContent, makeStyles, Theme, Typography} from '@material-ui/core';
import React from 'react';
import {ILocationProps} from '../domains/locations/index';

interface IProps {
  location: ILocationProps;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: 260,
    height: 360,
    margin: theme.spacing(2),
  },
  image: {
    width: 260, // do this a better way
    height: 200,
  },
}));

export default ({location}: IProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}key={location.id}>
      <img className={classes.image} src={location.image_url}/>
      <CardContent>
        <Typography>{location.name}</Typography>
        <Typography>Rating :{location.rating}</Typography>
        <Typography>{location.location.display_address}</Typography>
      </CardContent>
    </Card>
  );
};


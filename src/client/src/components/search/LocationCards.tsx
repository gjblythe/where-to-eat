import {Card, CardContent, Link, makeStyles, Theme, Typography} from '@material-ui/core';
import React from 'react';
import {ILocationProps} from '../../domains/locations/index';
import {stars} from '../shared/yelpStars';

interface IProps {
  location: ILocationProps;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: 260,
    height: 380,
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
      <img className={classes.image} src={location.image_url} alt={location.name}/>
      <CardContent>
        <Link href={location.url} target={'blank'}>{location.name}</Link>
        <div>
          <img src={stars(location.rating)} alt={`${location.name} image`}></img>
        </div>
        <Typography>{location.price}</Typography>
        <Typography>{location.location.display_address}</Typography>
      </CardContent>
    </Card>
  );
};


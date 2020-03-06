import {Card, Container, Grid, makeStyles, Theme} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import './App.css';

interface ILocationProps {
  id: string;
  alias: string;
  name: string;
  rating: string;
  is_closed: boolean
  location: {
    display_address: [],
  };
}
interface IState {
  message: string;
  locations: ILocationProps[]
}
const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: 260,
    height: 360,
    margin: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const [state, setState] = useState<IState>({
    message: '',
    locations: [],
  });
  async function getLocationZip(zip: string) {
    const response = await fetch(`/api/location/${zip}`);
      try {
        response.json().then(res => setState({...state, message: res.message, locations: res.locations.businesses}));
      } catch(err) {
        throw err;
      }
  }
  useEffect(() => {
    getLocationZip('85022');
  }, [])
  return (
    <Container maxWidth={'lg'}>
      <div>
        {state.message}
      </div>
      <Grid container>
        {state.locations.map(l => <Card className={classes.card} key={l.id}>{l.name}</Card>)}
      </Grid>
    </Container>
  );
}

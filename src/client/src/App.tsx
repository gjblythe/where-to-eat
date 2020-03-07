import {Container, Grid, makeStyles, Theme} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import LocatioCards from './components/LocationCards';
import {ILocationProps} from './domains/locations/index';

interface IState {
  message: string;
  locations: ILocationProps[]
}
const useStyles = makeStyles((theme: Theme) => ({

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
    getLocationZip('85014');
  }, [])
  return (
    <Container maxWidth={'lg'}>
      <div>
        {state.message}
      </div>
      <Grid container justify={'center'}>
        {state.locations !== undefined 
        && state.locations.map(location => <LocatioCards location={location}/>)}
      </Grid>
    </Container>
  );
}

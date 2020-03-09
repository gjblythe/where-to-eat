import {Container, Grid, makeStyles, Theme, Typography} from '@material-ui/core';
import React, {useState} from 'react';
import LocationCards from './components/LocationCards';
import {ILocationProps} from './domains/locations/index';
import SearchLocations from './components/SearchForm';
import AppBar from './components/AppBar';

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
  async function getLocation(search: string) {
    const response = await fetch(`/api/location/${search}`);
      try {
        response.json().then(res => setState({...state, message: res.message, locations: res.locations.businesses}));
      } catch(err) {
        throw err;
      }
  }
  return (
    <>
      <AppBar
        message={state.message}
      />
      <SearchLocations onSubmit={getLocation}/>
      <Container maxWidth={'lg'}>
        <Grid container justify={'center'}>
          {state.locations !== undefined 
          ? state.locations.map(location => <LocationCards location={location}/>)
          : <Typography variant={'h6'}>No locations found...</Typography>}
        </Grid>
      </Container>
    </>
  );
}

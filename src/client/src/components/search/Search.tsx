import { Container, Grid, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import AppPage from '../AppPage'
import { ILocationProps } from '../../domains/locations';
import LocationCards from './LocationCards';
import SearchForm from './SearchForm';


interface IState {
  message: string;
  locations: ILocationProps[]
}

export default () => {
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
    <AppPage title={'Search Locations'}>
      <SearchForm onSubmit={getLocation}/>
      <Container maxWidth={'lg'}>
        <Grid container justify={'center'}>
          {state.locations !== undefined 
          ? state.locations.map(location => <LocationCards location={location}/>)
          : <Typography variant={'h6'}>No locations found...</Typography>}
        </Grid>
      </Container>
    </AppPage>
  );
};

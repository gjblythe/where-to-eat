import { Container, Grid, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import AppPage from '../AppPage'
import { ILocationProps, ISearchProps } from '../../domains/locations';
import LocationCards from './LocationCards';
import SearchForm from './SearchForm';
import SavedSearches from './SavedSearches';

interface IState {
  message: string;
  locations: ILocationProps[];
}

export default () => {
  const [state, setState] = useState<IState>({
    message: '',
    locations: [],
  });
  const [savedSearch, setSavedSearch] = useState<ISearchProps[]>([]);
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
      <Grid container>
        <Grid item={true} xs={8}>
          <SearchForm onSubmit={getLocation} setSavedSearch={setSavedSearch} savedSearch={savedSearch}/>
        </Grid>
        <Grid item={true} xs={4}>
         <SavedSearches savedSearch={savedSearch}/>
        </Grid>
      </Grid>
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

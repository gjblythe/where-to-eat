import { Container, Grid, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import AppPage from '../AppPage'
import { ILocationProps, ISearchProps } from '../../domains/locations';
import LocationCards from './LocationCards';
import SearchForm from './SearchForm';
import LoadingSpinner from '../shared/LoadingSpinner';

interface IProps {
  loading: boolean;
  user: firebase.default.User;
}
interface IState {
  message: string;
  locations: ILocationProps[];
}

export default ({loading, user}: IProps) => {
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
    <AppPage title={'Search Locations'} user={user}>
      {loading 
        ? 
          <LoadingSpinner/>
        :
        <>
          <Grid container>
            <Grid item={true} xs={12}>
              <SearchForm onSubmit={getLocation} setSavedSearch={setSavedSearch} savedSearch={savedSearch}/>
            </Grid>
          </Grid>
          <Container maxWidth={'lg'}>
            <Grid container justify={'center'}>
              {state.locations !== undefined 
              ? state.locations.map(location => <LocationCards location={location}/>)
              : <Typography variant={'h6'}>No locations found...</Typography>}
            </Grid>
            <Grid item={true} xs={12}>
            {/* <SavedSearches savedSearch={savedSearch}/>  // this will be implemented at a later date */}
            </Grid>
          </Container>
        </>
      }
    </AppPage>
  );
};

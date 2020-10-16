import {Button, Container, FormControlLabel, Grid, makeStyles, Paper, Switch, TextField, Theme}  from '@material-ui/core';
import React, {useState} from 'react';
import {ISearchProps} from '../../domains/locations';

interface IProps {
  onSubmit: (props: string) => Promise<void>;
  savedSearch: ISearchProps[];
  setSavedSearch: (search: ISearchProps[]) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
 form: {
  margin: theme.spacing(2),
  padding: theme.spacing(1),
 },
 field: {
  padding: theme.spacing(1),
 },
 button: {
  margin: theme.spacing(1),
 }
}));

export default ({onSubmit, savedSearch, setSavedSearch}: IProps) => {
const classes = useStyles();
const [search, setSearch] = useState<ISearchProps>({
  searchQuery: '',
  limit: 0,
  category: 'all',
  text: '',
});

const handleChange = (prop: keyof ISearchProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearch({...search, [prop]: event.target.value});
};

const updateCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearch({...search, category: event.target.checked? 'vegan,vegetarian':'all' });
};

const searchLocation = () => {
  const {searchQuery, limit, category, text} = search;
  const query = (limit?: number, text?: string) => `${searchQuery}&categories=${category}&limit=${limit || 20}`;
  setSavedSearch(savedSearch.concat(search));
  onSubmit(query(limit, text));
};
  return (
    <Container maxWidth={'md'}>
      <Paper className={classes.form}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth={true}
              className={classes.field}
              label={'Location'}
              helperText={'enter a Location...city or zip'}
              variant={'outlined'}
              onChange={handleChange('searchQuery')}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth={true}
              inputProps={{type: 'number', min: '1', max: '50'}}
              className={classes.field}
              label={'Limit'}
              helperText={'Number of desired results'}
              variant={'outlined'}
              onChange={handleChange('limit')}
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <FormControlLabel
              className={classes.field}
              control={
            <Switch
              color={'primary'}
              onChange={updateCategory}
            />}
            label="Vegetarian/Vegan"
            />
          </Grid>
        </Grid>
        <Button
          className={classes.button}
          color={'primary'}
          variant={'contained'}
          onClick={searchLocation}
          >
          Submit
        </Button>
      </Paper>
    </Container>
  );
};


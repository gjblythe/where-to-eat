import {Button, Container, Grid, makeStyles, Paper, TextField, Theme}  from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {ISearchProps} from '../domains/locations';

interface IProps {
  onSubmit: (props: string) => Promise<void>;
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
export default ({onSubmit}: IProps) => {
const classes = useStyles();
const [state, setState] = useState<ISearchProps>({
  searchQuery: '',
  limit: 0,
  text: '',
})

const [searchQuery, setSearchQuery] = useState('');
const handleChange = (prop: keyof ISearchProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
  setState({...state, [prop]: event.target.value});
};
const searchLocation = () => {
  const {searchQuery, limit, text} = state;
  const query = (limit?: number, text?: string) => `${searchQuery}&limit=${limit || 20}`;
  onSubmit(query(limit, text));
};
  return (
    <Container maxWidth={'md'}>
      <Paper className={classes.form}>
        <Grid container>
          <Grid item xs={3}>
            <TextField
              className={classes.field}
              label={'Location'}
              helperText={'enter a Location...city or zip'}
              variant={'outlined'}
              onChange={handleChange('searchQuery')}
            />
          </Grid>
            <TextField
              inputProps={{type: 'number', min: '1', max: '50'}}
              className={classes.field}
              label={'Limit'}
              helperText={'Number of desired results'}
              variant={'outlined'}
              onChange={handleChange('limit')}
            />
        </Grid>
        {state.limit}
        {state.searchQuery}
        {state.text}
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


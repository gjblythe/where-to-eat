import {Button, Container, makeStyles, Paper, TextField, Theme}  from '@material-ui/core';
import React, {useState} from 'react';

interface IProps {
  onSubmit: (props: string) => Promise<void>;
}
const useStyles = makeStyles((theme: Theme) => ({
 form: {
  margin: theme.spacing(2),
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
const [searchQuery, setSearchQuery] = useState('');
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(event.target.value);
};
const searchLocation = () => {
  onSubmit(searchQuery)
};
  return (
    <Container maxWidth={'md'}>
      <Paper className={classes.form}>
        <div>
          <TextField 
            className={classes.field}
            label={'Location'}
            helperText={'enter a Location...city or zip'}
            variant={'outlined'}
            onChange={handleChange}
          />
        </div>
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


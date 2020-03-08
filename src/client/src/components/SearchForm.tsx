import {Button, makeStyles, Paper, TextField}  from '@material-ui/core';
import React, { useState } from 'react';

interface IProps {
  onSubmit: (props: string) => Promise<void>;
}
const useStyles = makeStyles(() => ({

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
    <Paper>
      <TextField 
        label={'Location'}
        helperText={'enter a zipcode'}
        variant={'outlined'}
        onChange={handleChange}
      />
      <Button onClick={searchLocation}>Submit</Button>
    </Paper>
  );
};


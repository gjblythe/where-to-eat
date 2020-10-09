import { Drawer, makeStyles, Link, List, Theme, ListItem } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import Routes from '../Routes';

const useStyles = makeStyles((theme: Theme) => ({
  routes: {
    width: 250,
  },
}));

interface IProps {
  open: boolean;
  onClose: () => void;
}

export default ({open, onClose}: IProps) => {
  const classes = useStyles();
  return (
    <Drawer anchor={'left'} open={open} onClose={onClose}>
      <List className={classes.routes} component={'nav'}>
        <ListItem>
          <Link to={'/'} component={RouterLink}>Home</Link>
        </ListItem>
        <ListItem>
          <Link to={'/settings'} component={RouterLink}>Settings</Link>
        </ListItem>
      </List>    
    </Drawer>
  );
}

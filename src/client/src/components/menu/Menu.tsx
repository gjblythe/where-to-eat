import firebase from 'firebase';
import { Drawer, makeStyles, Link, List, ListItem, ListItemIcon, ListItemText, Theme, useTheme } from '@material-ui/core';
import { Home, Settings } from '@material-ui/icons';

import React from 'react';
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  routes: {
    width: 250,
  },
}));

interface IProps {
  open: boolean;
  onClose: () => void;
  user: firebase.User | undefined;
}

export default ({open, onClose, user}: IProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const color = theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark;
  const signOut = () => firebase.auth().signOut();

  return (
    <Drawer anchor={'left'} open={open} onClose={onClose}>
      <List className={classes.routes} component={'nav'}>
        {user && 
          <ListItem>{user.displayName}</ListItem>
        }
        <ListItem>
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText>
            <Link to={'/'} style={{color}} component={RouterLink}>Home</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Settings/>
          </ListItemIcon>
          <ListItemText>
            <Link to={'/settings'} style={{color}} component={RouterLink}>Settings</Link>
          </ListItemText>
        </ListItem>
        {user && <ListItem button onClick={signOut}>Sign out</ListItem>}
      </List>    
    </Drawer>
  );
};

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
}

export default ({open, onClose}: IProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const color = theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark;
  return (
    <Drawer anchor={'left'} open={open} onClose={onClose}>
      <List className={classes.routes} component={'nav'}>
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
      </List>    
    </Drawer>
  );
}

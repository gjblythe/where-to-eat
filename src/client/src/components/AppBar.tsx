import {AppBar, IconButton, makeStyles, Theme, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Menu from './menu/Menu';

interface IProps {
  title: string;
  user?: firebase.default.User;
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  location: {
    margin: theme.spacing(2),
  }
}))

export default ({title, user}: IProps) => {
  const classes = useStyles();
  const [menuToggle, setMenuToggel] = React.useState(false);
  const toggleMenu = () => setMenuToggel(!menuToggle);
  return (
    <AppBar position={'sticky'}>
      <Toolbar>
        {user && 
          <IconButton edge={'start'} color={'inherit'} aria-label={'menu'} onClick={toggleMenu}>
            <MenuIcon/>
          </IconButton>
        }
        <Typography className={classes.title} variant={'h6'}>
          Where To Eat
        </Typography>
        <Typography className={classes.location} variant={'caption'}>
          {title}
        </Typography>
      </Toolbar>
      <Menu open={menuToggle} onClose={() => setMenuToggel(false)} user={user}/>
    </AppBar>
  );
};

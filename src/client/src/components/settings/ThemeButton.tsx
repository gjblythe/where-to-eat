import { Button, createMuiTheme, useTheme } from '@material-ui/core';
import React from 'react';

export default () => {
  const {palette} = useTheme();
  const notThemeType = palette.type === 'dark' ? 'Light': 'Dark';
  const changeTheme = () => {
    if (palette.type === 'dark') {
     createMuiTheme({palette: {type: 'light'}})
    } else {
     createMuiTheme({palette: {type: 'dark'}})
    }
  }
  return (
    <Button fullWidth onClick={changeTheme}>{`Switch to ${notThemeType} mode`}</Button>
  );
};

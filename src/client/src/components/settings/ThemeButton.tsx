import { Button, createMuiTheme, useTheme } from '@material-ui/core';
import React from 'react';
import { ColorModeContext } from '../../App';

export default () => {
  const {palette} = useTheme();
  const notThemeType = palette.type === 'dark' ? 'Light': 'Dark';

  const colorMode = React.useContext(ColorModeContext);
  return (
    <Button fullWidth onClick={colorMode.toggleColorMode}>{`Switch to ${notThemeType} mode`}</Button>
  );
};

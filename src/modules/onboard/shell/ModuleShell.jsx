import React from 'react';
import {Grid} from '@material-ui/core';
import Routes from './Routes';

function ModuleShell() {
  return (
    <Grid container justifyContent="center">
      <Routes />
    </Grid>
  );
}

export default ModuleShell;

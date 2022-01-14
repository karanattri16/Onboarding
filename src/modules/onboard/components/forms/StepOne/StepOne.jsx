import {Grid} from '@material-ui/core';
import TextBox from 'app/components/TextBox';
import React from 'react';

function StepOne() {
  return (
    <Grid>
      <Grid item xs={8}>
        <label className="text-field-label">Full Name</label>
        <TextBox name="full_name" placeholder="Steve Jobs" className="my-10" />
      </Grid>
      <Grid item xs={8}>
        <label className="text-field-label">Display Name</label>

        <TextBox name="display_name" placeholder="Steve" className="my-10" />
      </Grid>
    </Grid>
  );
}

export default StepOne;

import {Grid} from '@material-ui/core';
import TextBox from 'app/components/TextBox';
import React from 'react';

function StepTwo() {
  return (
    <Grid>
      <Grid item xs={9}>
        <label className="text-field-label">Workspace Name</label>
        <TextBox name="full_name" placeholder="Eden" className="my-10" />
      </Grid>
      <Grid item xs={9}>
        <label className="text-field-label">Workspace Url (optional)</label>

        <TextBox name="display_name" placeholder="Steve" className="my-10" />
      </Grid>
    </Grid>
  );
}

export default StepTwo;

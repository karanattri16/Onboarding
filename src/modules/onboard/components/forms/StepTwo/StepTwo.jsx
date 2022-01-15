import {Grid} from '@material-ui/core';
import TextBox from 'app/components/TextBox';
import PropTypes from 'prop-types';
import React from 'react';
import './stepTwo.scss';

function StepTwo(props) {
  const {errors, touched, values} = props;

  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <span className="text-field-label">Workspace Name</span>
        <TextBox
          name="workspace_info.workspace_name"
          placeholder="Eden"
          className="mt-5 mb-20"
          error={errors.workspace_info?.workspace_name}
          touched={touched.workspace_info?.workspace_name}
        />
      </Grid>
      <Grid item xs={12}>
        <span className="text-field-label">Workspace Url (optional)</span>
        <Grid container alignItems="center" className="mt-5 mb-20" justifyContent="center">
          <Grid
            item
            xs={5}
            className="url-prefix"
            container
            alignItems="center"
            justifyContent="center"
          >
            <span className="text-primary-blue"> www.eden.com/</span>
          </Grid>
          <Grid item xs={7}>
            <TextBox
              name="workspace_info.workspace_url"
              placeholder="Steve"
              className="my-10 workspace-url-input"
              error={errors.workspace_info?.workspace_url}
              touched={touched.workspace_info?.workspace_url}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

StepTwo.propTypes = {
  errors: PropTypes.instanceOf(Object),
  touched: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
};
StepTwo.defaultProps = {
  errors: {},
  touched: {},
  values: {},
};

export default StepTwo;

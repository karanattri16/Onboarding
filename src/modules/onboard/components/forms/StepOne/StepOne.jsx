import {Grid} from '@material-ui/core';
import TextBox from 'app/components/TextBox';
import React from 'react';
import PropTypes from 'prop-types';

function StepOne(props) {
  const {errors, touched, values} = props;

  return (
    <>
      <Grid item xs={7}>
        <span className="text-field-label">Full Name</span>
        <TextBox
          name="user_info.full_name"
          placeholder="Steve Jobs"
          className="mt-5 mb-20"
          error={errors.user_info?.full_name}
          touched={touched.user_info?.full_name}
        />
      </Grid>
      <Grid item xs={7}>
        <span className="text-field-label">Display Name</span>

        <TextBox
          name="user_info.display_name"
          placeholder="Steve"
          className="mt-5 mb-20"
          error={errors.user_info?.display_name}
          touched={touched.user_info?.display_name}
        />
      </Grid>
    </>
  );
}

StepOne.propTypes = {
  errors: PropTypes.instanceOf(Object),
  touched: PropTypes.instanceOf(Object),
  values: PropTypes.instanceOf(Object),
};
StepOne.defaultProps = {
  errors: {},
  touched: {},
  values: {},
};

export default StepOne;

import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import {Field} from 'formik';
import './textBox.scss';

function TextBox(props) {
  const {type, className, error, touched, ...rest} = props;
  return (
    <Field name={props.name}>
      {({field}) => (
        <TextField
          fullWidth
          variant="outlined"
          type={type}
          {...rest}
          className={`text-field ${className}`}
          {...field}
          helperText={error && touched ? error : ''}
          error={error ? !!touched : false}
        />
      )}
    </Field>
  );
}

TextBox.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
};
TextBox.defaultProps = {
  type: 'text',
  className: '',
  error: '',
  touched: false,
  fullWidth: true,
};
export default TextBox;

import React from 'react';
import PropTypes from 'prop-types';
import './textBox.scss';

function TextBox(props) {
  const {type, className, ...rest} = props;
  return <input type={type} {...rest} className={`text-field ${className}`} />;
}

TextBox.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};
TextBox.defaultProps = {
  type: 'text',
  className: '',
};
export default TextBox;

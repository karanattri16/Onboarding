import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {children, ...rest} = props;
  return (
    <button className="x-button" {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: '',
};

export default Button;

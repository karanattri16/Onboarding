import PropTypes from 'prop-types';
import React from 'react';
import './paper.scss';

function Paper(props) {
  const {children, ...rest} = props;
  return (
    <div {...rest} className="paper">
      {children}
    </div>
  );
}

Paper.propTypes = {
  children: PropTypes.node,
};
Paper.defaultProps = {
  children: <></>,
};

export default Paper;

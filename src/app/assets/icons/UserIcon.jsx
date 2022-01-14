import React from 'react';
import PropTypes from 'prop-types';

function UserIcon(props) {
  const {fill} = props;
  return (
    <svg width="24" height="20" viewBox="0 0 64.000000 64.000000">
      <g
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M261 623 c-50 -26 -74 -64 -78 -125 -5 -62 17 -106 69 -138 120 -73
       256 70 190 199 -35 70 -116 98 -181 64z"
        />
        <path
          d="M234 287 c-105 -41 -174 -138 -174 -243 l0 -44 261 0 261 0 -4 58
       c-2 31 -12 73 -22 93 -22 47 -78 103 -125 125 -44 22 -155 28 -197 11z"
        />
      </g>
    </svg>
  );
}

UserIcon.propTypes = {
  fill: PropTypes.string,
};

UserIcon.defaultProps = {
  fill: '#00000',
};

export default UserIcon;

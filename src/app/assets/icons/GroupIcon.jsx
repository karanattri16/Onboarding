import React from 'react';
import PropTypes from 'prop-types';

function GroupIcon(props) {
  const {fill} = props;

  return (
    <svg width="25" height="20" viewBox="0 0 64.000000 64.000000">
      <g
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M265 495 c-14 -13 -25 -36 -25 -50 0 -33 41 -75 74 -75 38 0 56 10
72 42 40 77 -59 146 -121 83z"
        />
        <path
          d="M488 448 c-27 -22 -30 -53 -7 -81 24 -31 59 -35 82 -9 48 53 -19 133
-75 90z"
        />
        <path
          d="M70 435 c-16 -20 -16 -61 0 -80 21 -26 81 -16 99 16 13 24 13 29 -2
53 -20 30 -76 36 -97 11z"
        />
        <path
          d="M273 329 c-66 -19 -119 -105 -111 -177 l3 -27 158 -3 157 -3 0 54 c0
110 -103 187 -207 156z"
        />
        <path
          d="M83 303 c-38 -7 -83 -68 -83 -113 l0 -40 69 0 68 0 7 48 c3 26 13 58
22 70 14 21 14 23 -11 32 -27 10 -33 10 -72 3z"
        />
        <path
          d="M471 301 c-11 -7 -10 -13 2 -32 9 -13 19 -43 23 -66 l7 -43 70 0 70
0 -6 47 c-7 64 -49 103 -110 103 -23 0 -48 -4 -56 -9z"
        />
      </g>
    </svg>
  );
}

GroupIcon.propTypes = {
  fill: PropTypes.string,
};

GroupIcon.defaultProps = {
  fill: '#00000',
};

export default GroupIcon;

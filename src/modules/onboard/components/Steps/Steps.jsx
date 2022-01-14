import React from 'react';
import PropTypes from 'prop-types';
import './steps.scss';
import {Grid} from '@material-ui/core';

function Steps(props) {
  const {stepList = [], currentStep} = props;

  return (
    <Grid container alignItems="center" justifyContent="center" className="step-container">
      {stepList.map((step, index) => (
        <div key={step.label}>
          <div
            className={`step step-${index + 1} ${step.className} ${(step.completed ||
              index + 1 === currentStep) &&
              'colored'}`}
            key={step.label.concat(index)}
          >
            <div className="step-label">{step.label}</div>
          </div>
          {index !== stepList.length - 1 ? (
            <>
              <div
                className={`step-marker ${(step.completed || index + 1 === currentStep) &&
                  'colored'}`}
              ></div>
              <div
                className={`step-marker ${(step.completed || index + 2 === currentStep) &&
                  'colored'}`}
              ></div>
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
    </Grid>
  );
}

Steps.propTypes = {
  stepList: PropTypes.instanceOf(Array).isRequired,
  currentStep: PropTypes.number.isRequired,
};

Steps.defaultProps = {
  currentStep: 1,
};

export default Steps;

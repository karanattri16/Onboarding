import React from 'react';
import PropTypes from 'prop-types';
import './steps.scss';
import {Grid} from '@material-ui/core';

function Steps(props) {
  const {stepList = [], currentStep} = props;

  return (
    <Grid container alignItems="center" justifyContent="center" className="step-container" item>
      {stepList.map((step, index) => (
        <Grid item key={step.label} className="step-wrapper">
          <div
            className={`step text-primary-dark  step-${index + 1} ${
              step.className
            } ${(step.completed || index + 1 === currentStep) && 'colored'}`}
            key={step.label.concat(index)}
          >
            <div className="step-label">{step.label}</div>
          </div>
          {index !== stepList.length - 1 ? (
            <>
              <div className="path">
                <span className="progress-track">
                  <span
                    className={` ${step.completed ? 'completed' : ''} ${
                      index + 1 === currentStep ? 'started' : ''
                    }`}
                  ></span>
                </span>
              </div>

              <>
                {/* <div
                  className={`step-marker ${(step.completed || index + 1 === currentStep) &&
                    'colored'}`}
                ></div>
                <div
                  className={`step-marker ${(step.completed || index + 2 === currentStep) &&
                    'colored'}`}
                ></div> */}
              </>
            </>
          ) : (
            <></>
          )}
        </Grid>
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

import {Grid} from '@material-ui/core';
import ProcessCompleteIcon from 'app/assets/icons/ProcessCompleteIcon';
import Button from 'app/components/Button';
import {Form, Formik} from 'formik';
import React, {Component} from 'react';
import StepOne from '../forms/StepOne';
import StepThree from '../forms/StepThree';
import StepTwo from '../forms/StepTwo';
import Message from '../Message';
import Steps from '../Steps';

export default class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.forms = {
      1: <StepOne />,
      2: <StepTwo />,
      3: <StepThree />,
    };
    this.state = {
      stepList: [
        {label: '1', completed: false},
        {label: '2', completed: false},
        {label: '3', completed: false},
        {label: '4', completed: false},
      ],
      stepsCompleted: [],
      currentStep: 1,
      initialValues: {},
    };
  }
  handleStepChange = e => {
    const updateStepList = this.updateStepList();
    this.setState(prev => ({currentStep: prev.currentStep + 1, stepList: updateStepList}));
  };

  updateStepList = () => {
    const tempStepList = [...this.state.stepList];
    tempStepList[this.state.currentStep - 1].completed = true;
    return tempStepList;
  };

  render() {
    return (
      <Grid container justifyContent="center" item xs={6}>
        <Grid item xs={12} container justifyContent="center">
          <span className="m-10">icon</span>
          <span>Eden</span>
        </Grid>
        <Grid item xs={12}>
          <Steps stepList={this.state.stepList} currentStep={this.state.currentStep} />
        </Grid>
        {this.state.currentStep === 4 ? (
          <Grid item xs={12} justifyContent="center" container>
            <ProcessCompleteIcon />
          </Grid>
        ) : (
          <></>
        )}
        <Grid item xs={12} container justifyContent="center">
          <Message currentStep={this.state.currentStep} />
        </Grid>
        <Formik>
          {({values, errors, touched, setFieldValues}) => (
            <Form>
              <Grid item container justifyContent="center" xs={12}>
                {this.forms[this.state.currentStep]}
                <Grid item xs={8}>
                  <Button
                    onClick={this.handleStepChange}
                    disabled={this.state.currentStep === 4}
                    type="button"
                    className="x-button mt-10"
                  >
                    Create Workspace
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    );
  }
}

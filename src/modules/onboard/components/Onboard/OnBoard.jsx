import {Grid, Grow, Slide} from '@material-ui/core';
import ProcessCompleteIcon from 'app/assets/icons/ProcessCompleteIcon';
import Button from 'app/components/Button';
import {Form, Formik} from 'formik';
import React, {Component} from 'react';
import StepOne from '../forms/StepOne';
import StepThree from '../forms/StepThree';
import StepTwo from '../forms/StepTwo';
import Message from '../Message';
import Steps from '../Steps';
import * as Yup from 'yup';
import './onBoard.scss';
import EdenIcon from 'app/assets/icons/EdenIcon';

const validationSchema = Yup.object().shape({
  user_info: Yup.object().shape({
    full_name: Yup.string().required('Required Field'),
    display_name: Yup.string().required('Required Field'),
  }),

  workspace_info: Yup.lazy(values => {
    if (values) {
      return Yup.object().shape({
        workspace_name: Yup.string().required('Required Field'),
        workspace_url: Yup.string(),
      });
    }
    return Yup.mixed().notRequired();
  }),
  workspace_usage_info: Yup.lazy(values => {
    if (values) {
      return Yup.object().shape({
        type: Yup.string().required('Please select one option'),
      });
    }
    return Yup.mixed().notRequired();
  }),
});

export default class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.forms = {
      1: StepOne,
      2: StepTwo,
      3: StepThree,
    };
    this.state = {
      finalValues: {},
      stepList: [
        {label: '1', completed: false},
        {label: '2', completed: false},
        {label: '3', completed: false},
        {label: '4', completed: false},
      ],
      stepsCompleted: [],
      currentStep: 1,
      initialValues: {
        user_info: {full_name: '', display_name: ''},
      },
    };
  }

  addObj = () => {
    if (this.state.currentStep === 1) {
      return {name: 'workspace_info', obj: {workspace_name: '', workspace_url: ''}};
    }
    if (this.state.currentStep === 2) {
      return {name: 'workspace_usage_info', obj: {type: ''}};
    }
  };

  handleStepChange = (values, {setFieldValue, setTouched, setErrors}) => {
    if (this.state.currentStep === 4) {
      window.location.reload();
    }
    if (this.state.currentStep < 3) {
      const {name, obj} = this.addObj();
      setFieldValue(name, obj);
    }

    if (this.state.currentStep === 3) {
      this.setState({finalValues: values});
    }
    if (this.state.currentStep < 4) {
      const updateStepList = this.updateStepList();
      this.setState(prev => ({currentStep: prev.currentStep + 1, stepList: updateStepList}));
    }
  };

  updateStepList = () => {
    const tempStepList = [...this.state.stepList];
    tempStepList[this.state.currentStep - 1].completed = true;
    return tempStepList;
  };

  render() {
    return (
      <Grid container justifyContent="center" item xs={11} md={6} lg={8} className="form-container">
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          className="title-container"
        >
          <EdenIcon />
          <span className="app-name text-primary-dark">Eden</span>
        </Grid>
        <Grid item xs={12} justifyContent="center" container>
          <Steps stepList={this.state.stepList} currentStep={this.state.currentStep} />
        </Grid>
        {this.state.currentStep === 4 ? (
          <Grow timeout={500} in={this.state.currentStep === 4}>
            <Grid
              item
              xs={12}
              justifyContent="center"
              container
              className="completion-icon-container"
            >
              <ProcessCompleteIcon />
            </Grid>
          </Grow>
        ) : (
          <></>
        )}
        <Grid item xs={12} container justifyContent="center" className="message-container">
          <Message currentStep={this.state.currentStep} values={this.state.finalValues} />
        </Grid>

        <Grid item xs={12} container justifyContent="center">
          <Formik
            validationSchema={validationSchema}
            initialValues={this.state.initialValues}
            onSubmit={this.handleStepChange}
          >
            {({values, errors, touched, setFieldValue, isValid}) => (
              <Form autocomplete="off">
                <Grid container justifyContent="center">
                  {this.state.currentStep === 1 ? (
                    <StepOne errors={errors} touched={touched} values={values} />
                  ) : (
                    <></>
                  )}
                  {this.state.currentStep === 2 ? (
                    <StepTwo errors={errors} touched={touched} values={values} />
                  ) : (
                    <></>
                  )}
                  {this.state.currentStep === 3 ? (
                    <StepThree
                      errors={errors}
                      touched={touched}
                      values={values}
                      setFieldValue={setFieldValue}
                    />
                  ) : (
                    <></>
                  )}

                  <Grid item xs={11} sm={8} container justifyContent="center">
                    <Button
                      type="submit"
                      className={`x-button mt-5 ${this.state.currentStep === 4 &&
                        'onboard-form-button'}`}
                    >
                      {this.state.currentStep < 4 ? `Create Workspace` : `Launch Eden`}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    );
  }
}

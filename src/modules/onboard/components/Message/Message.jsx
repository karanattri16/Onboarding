import React from 'react';
import {STEP_ONE, STEP_TWO, STEP_FOUR, STEP_THREE} from 'modules/OnBoard/enums/onBoardEnums';
import {Grid} from '@material-ui/core';
import './message.scss';

const messageObj = {
  [STEP_ONE]: {
    title: 'Welcome! First things first...',
    message: 'You can always change them later.',
  },
  [STEP_TWO]: {
    title: `Let's set up a home for all your work`,
    message: 'You can always create andther workspace later.',
  },
  [STEP_THREE]: {
    title: 'How are you planning to use Eden?',
    message: `We'll streamline your setup experience accordingly.`,
  },
  [STEP_FOUR]: {
    title: 'Congratulations, Eren!',
    message: `You have completed onboarding, you can start using the Eden!`,
  },
};

function Message(props) {
  const {currentStep} = props;

  return (
    <>
      <Grid item xs={12}>
        <h2 className="text-center">{messageObj[currentStep].title}</h2>
      </Grid>
      <Grid item xs={12}>
        <p className="text-center text-navy font-sm">{messageObj[currentStep].message}</p>
      </Grid>
    </>
  );
}

export default Message;

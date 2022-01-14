import {FormHelperText, Grid} from '@material-ui/core';
import GroupIcon from 'app/assets/icons/GroupIcon';
import UserIcon from 'app/assets/icons/UserIcon';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './stepThree.scss';

function StepThree(props) {
  const {errors, touched, setFieldValue} = props;
  const [selectedTab, setSelectedTab] = useState(undefined);

  const handleClick = (id, type) => () => {
    if (selectedTab === id) {
      setSelectedTab(undefined);
      setFieldValue('workspace_usage_info.type', '');
      return;
    }
    setFieldValue('workspace_usage_info.type', type);
    setSelectedTab(id);
  };

  return (
    <Grid className="mb-20" container justifyContent="center">
      <button
        className={`tile-container left ${selectedTab === 1 ? 'selected' : 'not-selected'}`}
        type="button"
        onClick={handleClick(1, 'user')}
      >
        <div className="icon">
          <UserIcon fill={selectedTab === 1 ? '#664de5' : '#00000'} />
        </div>
        <p className="font-bold font-md text-primary-dark">For myself</p>
        <p className="font-sm text-primary-blue">
          Write better. Think more clearly. Stay organized.
        </p>
      </button>

      <button
        className={`tile-container right ${selectedTab === 2 ? 'selected' : 'not-selected'}`}
        type="button"
        onClick={handleClick(2, 'group')}
      >
        <div className="icon">
          <GroupIcon fill={selectedTab === 2 ? '#664de5' : '#00000'} />
        </div>
        <p className="font-bold font-md text-primary-dark">With my team</p>
        <p className="font-sm text-primary-blue">
          Wikis, docs, tasks & projects, all in one place.
        </p>
      </button>

      {errors.workspace_usage_info?.type && touched.workspace_usage_info?.type && (
        <Grid item xs={6}>
          <FormHelperText error align="center">
            {errors.workspace_usage_info.type}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  );
}

StepThree.propTypes = {
  errors: PropTypes.instanceOf(Object),
  touched: PropTypes.instanceOf(Object),
  setFieldValue: PropTypes.instanceOf(Object),
};
StepThree.defaultProps = {
  errors: {},
  touched: {},
  setFieldValue: () => {},
};

export default StepThree;

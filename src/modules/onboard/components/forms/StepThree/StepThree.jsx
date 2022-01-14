import {Grid} from '@material-ui/core';
import GroupIcon from 'app/assets/icons/GroupIcon';
import UserIcon from 'app/assets/icons/UserIcon';
import React, {useState} from 'react';
import './stepThree.scss';

function StepThree() {
  const [selectedTab, setSelectedTab] = useState(undefined);
  const handleClick = id => () => {
    if (selectedTab === id) {
      setSelectedTab(undefined);
      return;
    }
    setSelectedTab(id);
  };
  return (
    <Grid container justifyContent="center">
      <button
        className={`tile-container left ${selectedTab === 1 && 'selected'}`}
        type="button"
        onClick={handleClick(1)}
      >
        <div className="icon">
          <UserIcon />
        </div>
        <p className="font-bold font-md">For myself</p>
        <p className="font-sm color-grey">Write better. Think more clearly. Stay organized.</p>
      </button>
      <button
        className={`tile-container right ${selectedTab === 2 && 'selected'}`}
        type="button"
        onClick={handleClick(2)}
      >
        <div className="icon">
          <GroupIcon />
        </div>
        <p className="font-bold font-md">With my team myself</p>
        <p className="font-sm color-grey">Wikis, docs, tasks & projects, all in one place.</p>
      </button>
    </Grid>
  );
}

export default StepThree;

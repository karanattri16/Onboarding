import Paper from 'app/components/Paper';
import ModuleShell from 'modules/OnBoard/shell/ModuleShell';
import React from 'react';
import './appShell.scss';
import 'app/assets/styles/common.scss';

function AppShell() {
  return (
    <div className="app">
      <div className="main-container">
        <Paper>
          <ModuleShell />
        </Paper>
      </div>
    </div>
  );
}

export default AppShell;

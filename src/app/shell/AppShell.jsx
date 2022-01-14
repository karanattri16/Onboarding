import Paper from 'app/components/Paper';
import ModuleShell from 'modules/OnBoard/shell/ModuleShell';
import React from 'react';
import './appShell.scss';
import 'app/assets/styles/common.scss';

function AppShell() {
  return (
    <div className="app">
      App shell
      <Paper>
        <ModuleShell />
      </Paper>
    </div>
  );
}

export default AppShell;

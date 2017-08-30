// @flow weak
import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from 'material-ui/Toolbar';

import './App.css';

const App = () => (
  <MuiThemeProvider>
    <AppBar position="static" color="default">
      <Toolbar>
          Title
      </Toolbar>
    </AppBar>
  </MuiThemeProvider>
);
export default App;

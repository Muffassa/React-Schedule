import React, { Component } from 'react';
import ButtonAppBar from './Components/ButtonAppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


class App extends Component {
  render() {
    const buttonAppBarClasses = {
     root: {   backgroundColor: 'red'}
    }
    return (
      <MuiThemeProvider>
        <ButtonAppBar/>
      </MuiThemeProvider>
    );
  }
}

export default App;

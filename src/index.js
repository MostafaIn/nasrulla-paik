import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#0d47a1'
    },
    secondary:{
      main: '#ff6d00'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
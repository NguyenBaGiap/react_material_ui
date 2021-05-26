import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';


const globalTheme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

ReactDOM.render(
  <React.StrictMode>
      <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={globalTheme}>
              <App />
          </MuiThemeProvider>
      </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

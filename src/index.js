import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './reducers/store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter';

const theme = createMuiTheme({
 /* theme for v1.x */
});

ReactDOM.render(
 <Provider store={configureStore()}>
  <MuiThemeProvider theme={theme}>
    <AppRouter/>
  </MuiThemeProvider>
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();




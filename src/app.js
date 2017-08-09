import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; // Necessary for material-ui at the moment
injectTapEventPlugin(); // Necessary for material-ui at the moment
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	  <MuiThemeProvider>
    	<App />
		</MuiThemeProvider>
  </Provider>
  , document.querySelector('.container-fluid'));

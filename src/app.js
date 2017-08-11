import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; // Necessary for material-ui at the moment
injectTapEventPlugin(); // Necessary for material-ui at the moment
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import NotFound from './components/not_found';
import ContactSelect from './components/contact_select';
import ContactNew from './components/contact_new';
import ContactDetail from './containers/contact_detail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	  <MuiThemeProvider>
			<BrowserRouter>
	      <App>
					<Switch>
						<Route path="/signin" component={Signin} />
            <Route path="/signout" component={Signout} />
            <Route path="/signup" component={Signup} />
	          <Route path="/contacts/new" component={RequireAuth(ContactNew)} />
						<Route path="/contacts/:id" component={RequireAuth(ContactDetail)} />
            <Route path="/" component={RequireAuth(ContactSelect)} />
						<Route path="*" component={NotFound} />
					</Switch>
				</App>
    	</BrowserRouter>
		</MuiThemeProvider>
  </Provider>
  , document.querySelector('.container-fluid'));

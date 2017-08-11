import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ContactsReducer from './reducer_contacts';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
  contacts: ContactsReducer,
  form: formReducer
});

export default rootReducer;

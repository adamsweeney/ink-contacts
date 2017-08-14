import { FETCH_CONTACTS, FETCH_CONTACT, DELETE_CONTACT, CREATE_CONTACT, CONTACTS_ERROR } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_CONTACTS:
			return _.mapKeys(action.payload.data.contacts, 'id');
	 	case FETCH_CONTACT:
		 	return { ...state, [ action.payload.data.contact.id ] : action.payload.data.contact };
		case DELETE_CONTACT:
			return _.omit(state, action.payload);
		case CREATE_CONTACT:
			return { ...state, [ action.payload.data.contact.id ] : action.payload.data.contact };
		case CONTACTS_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}

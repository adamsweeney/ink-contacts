import { FETCH_CONTACTS, FETCH_CONTACT, DELETE_CONTACT, CREATE_CONTACT } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_CONTACTS:
			return _.mapKeys(action.payload.data.contacts, 'id');
	 	case FETCH_CONTACT:
		 	return { ...state, [ action.payload.data.id ] : action.payload.data };
		case DELETE_CONTACT:
			return _.omit(state, action.payload);
		case CREATE_CONTACT:
			return { ...state, [ action.payload.data.id ] : action.payload.data };
		default:
			return state;
	}
}

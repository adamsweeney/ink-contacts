import axios from 'axios';

export const CREATE_CONTACT = 'CREATE_CONTACT';
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACT = 'FETCH_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SIGNUP_USER = 'SIGNUP_USER';

const ROOT_URL = 'https://inkblot-contacts.herokuapp.com/api';
const LOCAL_URL = 'http://localhost:3000/api';

export function signinUser(values, callback) {
	return function(dispatch) {
		axios.post(`${LOCAL_URL}/login`, values)
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.access_token);
				callback();
			})
			.catch(error => {
				dispatch(authError('Bad Login Info'));
			});
	}
}

export function signupUser(values, callback) {
	return function(dispatch) {
		axios.post(`${LOCAL_URL}/signup`, values)
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.access_token);
				callback();
			})
			.catch(error => {
				dispatch(authError(error));
			});
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signoutUser() {
	localStorage.removeItem('token');
	return { type: UNAUTH_USER };
}

export function createContact(values, callback) {
	return function(dispatch) {
		axios.post(`${LOCAL_URL}/contacts`, values, {
			headers: { authorization: localStorage.getItem('token') }
		}).then(() => {
				dispatch({ type: CREATE_CONTACT });
				callback();
			});
	}
}

export function fetchContacts() {
	return function(dispatch) {
	  axios.get(`${LOCAL_URL}/contacts`, {
			headers: { authorization: localStorage.getItem('token')}
		}).then(response => {
			dispatch({
				type: FETCH_CONTACTS,
			 	payload: response
			});
		});
	}
}

export function fetchContact(id) {
	return function(dispatch) {
	  axios.get(`${LOCAL_URL}/contacts/${id}`, {
			headers: { authorization: localStorage.getItem('token')}
		}).then(response => {
			dispatch({
				type: FETCH_CONTACT,
				payload: response
			});
		});
	}
}

export function deleteContact(id, callback) {
	return function(dispatch) {
	  axios.delete(`${LOCAL_URL}/contacts/${id}`, {
			headers: { authorization: localStorage.getItem('token') }
		}).then(() => {
			dispatch({ type: DELETE_CONTACT});
			callback();
		});
	}
}

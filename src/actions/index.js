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

export function signupUser({ email, password }, callback) {
	return function(dispatch) {
		axios.post(`${LOCAL_URL}/users/create`, values) //# TODO: implement signup
			.then(response => {
				dispatch({ type: SIGNUP_USER });
				localStorage.setItem('token', response.data.access_token);
				callback();
			})
			.catch(error => {
				dispatch(authError('Bad Login Info'));
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
		axios.post(`${ROOT_URL}/contacts`, values)
			.then(() => {
				dispatch({ type: CREATE_CONTACT });
				callback();
			});
	}
}

export function fetchContacts() {
	const request = axios.get(`${ROOT_URL}/contacts`);

	return {
		type: FETCH_CONTACTS,
		payload: request
	};
}

export function fetchContact(id) {
	const request = axios.get(`${ROOT_URL}/contacts/${id}`);

	return {
		type: FETCH_CONTACT,
		payload: request
	};
}

export function deleteContact(id, callback) {
	const request = axios.delete(`${ROOT_URL}/contacts/${id}`)
		.then(() => callback());

	return {
		type: DELETE_CONTACT,
		payload: id
	};
}

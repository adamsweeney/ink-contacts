import axios from 'axios';

export const CREATE_CONTACT = 'CREATE_CONTACT';
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACT = 'FETCH_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

const ROOT_URL = 'https://inkblot-contacts.herokuapp.com/api';

export function createContact(values, callback) {
	const request = axios.post(`${ROOT_URL}/contacts`, values)
		.then(() => callback());

	return {
		type: CREATE_CONTACT,
		payload: request
	};
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

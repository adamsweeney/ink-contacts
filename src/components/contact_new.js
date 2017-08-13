import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createContact } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class ContactNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			phone_number: '',
			email: '',
		}
		this.onTextChange = this.onTextChange.bind(this);
	}

	renderField(field) {
		const { meta: { touched, error } }	= field;
		return (
			<div>
				<TextField {...field.input} value={field.value} errorText={touched ? error : ''} floatingLabelFixed={true} floatingLabelText={field.label} />
			</div>
		);
	}

	onSubmit(values) {
		this.props.createContact(values, response => {
			this.props.history.push(`/contacts/${response.data.id}`);
		});
	}

	onTextChange(event) {
    const name = event.target.name;
		this.setState({
			[name] : event.target.value
		});
	}

	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<div>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field label="First Name" name="first_name" value={this.state.code} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Last Name" name="last_name" value={this.state.name} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Phone" name="phone_number" value={this.state.market} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Email" name="email" value={this.state.buying_price} onChange={this.onTextChange} component={this.renderField} />
					<RaisedButton primary type="submit" disabled={pristine || submitting} label="Submit" />
					<Link to="/">
						<RaisedButton label="Cancel" secondary />
					</Link>
				</form>
			</div>
		)
	}
}

function validate(values) {
	const errors = {};

	//validate inputs from values
	if (!values.first_name) {
		errors.first_name = "Enter a first name!";
	}

	if (!values.last_name) {
		errors.last_name = "Enter a last name!";
	}

	if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Please enter a valid email";
	}

	//errors is empty, form is fine to submit
	return errors;
}

export default reduxForm({
	validate,
	form: 'ContactNewForm'
})(
	connect(null, { createContact })(ContactNew)
);

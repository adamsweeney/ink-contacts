import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createContact } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RenderDropzoneInput from './render_dropzone_input';

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
		var body = new FormData();
		if (values["avatar"]) {
			values["avatar"] = values["avatar"][0];
		}
    Object.keys(values).forEach(( key ) => {
      body.append(key, values[ key ]);
    });
		this.props.createContact(body, response => {
			this.props.history.push(`/contacts/${response.data.contact.id}`);
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
			<div className="contact-form">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field label="First Name" name="first_name" value={this.state.first_name} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Last Name" name="last_name" value={this.state.last_name} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Phone" name="phone_number" value={this.state.phone_number} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Email" name="email" value={this.state.email} onChange={this.onTextChange} component={this.renderField} />
          <Field
            name="avatar"
            component={RenderDropzoneInput}
          />
					<RaisedButton style={{marginTop: 10}} primary type="submit" disabled={pristine || submitting} label="Create" />
					<Link to="/">
						<RaisedButton style={{marginTop: 10}} label="Cancel" secondary />
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

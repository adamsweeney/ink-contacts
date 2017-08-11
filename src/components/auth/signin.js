import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { signinUser } from '../../actions';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	renderField(field) {
		const { meta: { touched, error } }	= field;
		return (
			<div>
				<TextField {...field.input} value={field.value} type={field.type} errorText={touched ? error : ''} floatingLabelFixed={true} floatingLabelText={field.label} />
			</div>
		);
	}

	onSubmit(values) {
		this.props.signinUser(values, () => {
			this.props.history.push('/');
		});
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field label="Email" name="username" value={this.state.username} component={this.renderField} />
				<Field label="Password" name="password" type="password" value={this.state.password} component={this.renderField} />
				{this.renderAlert()}
				<RaisedButton primary type="submit" disabled={pristine || submitting} label="Submit" />
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'SigninForm'
})(
	connect(mapStateToProps, { signinUser })(Signin)
);

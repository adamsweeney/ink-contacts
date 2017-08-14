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
      email: '',
      password: ''
    }
  }

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.history.push('/');
    }
  }

  renderField(field) {
    const { meta: { touched, error } }  = field;
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
      <div className="auth-form">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Email" name="email" value={this.state.email} component={this.renderField} />
          <Field label="Password" name="password" type="password" value={this.state.password} component={this.renderField} />
          {this.renderAlert()}
          <RaisedButton primary type="submit" disabled={pristine || submitting} label="Submit" />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  //validate inputs from values
  if (!values.email) {
    errors.email = "Enter an email!";
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!values.password) {
    errors.password = "Enter password!";
  }

  //errors is empty, form is fine to submit
  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
   };
}

export default reduxForm({
  validate,
  form: 'SigninForm'
})(
  connect(mapStateToProps, { signinUser })(Signin)
);

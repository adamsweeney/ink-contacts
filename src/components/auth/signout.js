import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signoutUser } from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';

class Signout extends Component {
	componentDidMount() {
	  this.props.signoutUser();
	}

	render() {
		return <div>You've successfully signed out</div>;
	}
}

export default connect(null, { signoutUser })(Signout);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContact, deleteContact } from '../actions';
import _ from 'lodash';

import ProfileImage from '../components/profile_image';
import ToolbarOptions from '../containers/toolbar_options';

class ContactDetail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchContact(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deleteContact(id, () => {
			this.props.history.push("/");
		});
	}

	render() {
		const { contact } = this.props;
		if (!contact) {
			return <div>Loading...</div>;
		}
		return (
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4">
					<div className="row">
						<ProfileImage />
					</div>
				</div>
				<div className="col-lg-8 col-md-8 col-sm-8">
					<div className="details">
						<h3>{contact.first_name} {contact.last_name}</h3>
						<hr />
						<p>First Name: {contact.first_name}</p>
						<p>Last Name: {contact.last_name}</p>
						<p>Phone Number: {contact.phone_number}</p>
						<p>Email: {contact.email}</p>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		contact: state.contacts[ownProps.match.params.id],
		authenticated: state.auth.authenticated
 	};
}

export default connect(mapStateToProps, { fetchContact, deleteContact })(ContactDetail);

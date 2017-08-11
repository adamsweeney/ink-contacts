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

		return (
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-4">
					<div className="row">
						<ProfileImage />
					</div>
				</div>
				<div className="col-lg-8 col-md-8 col-sm-8">
					<div className="details">
						<h3>Eric Hoffman</h3>
						<hr />
						<p>First Name: Eric</p>
						<p>Last Name: Hoffman</p>
						<p>Phone Number: 2498777855</p>
						<p>Email: ehoff@gmail.com</p>
					</div>
				</div>
				{/* <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Contact</button> */}
				{/* <h3>{contact.first_name}</h3>
				// <h6>Market: {contact.last_name}</h6>
				// <p>{contact.phone_number}</p>
				// <p>{contact.email}</p> */}
			</div>
		);
	}
}

function mapStateToProps({ contacts, auth }, ownProps) {
	return {
		contact: contacts[ownProps.match.params.id]
 	};
}

export default connect(mapStateToProps, { fetchContact, deleteContact })(ContactDetail);

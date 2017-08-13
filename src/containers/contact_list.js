import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
	return class SelectableList extends Component {
		static propTypes = {
      children: PropTypes.node.isRequired,
    };

		componentWillMount() {
      this.setState({
        selectedId: null,
      });
    }

		handleRequestChange = (event, id) => {
      this.setState({
        selectedId: id,
      });
			//this.props.history.push(`/contacts/${selectedId}`);
    };

		render() {
      return (
        <ComposedComponent
          value={this.state.selectedId}
          onChange={this.handleRequestChange.bind(this)}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
	};
}

SelectableList = wrapState(SelectableList);

class ContactList extends Component {
	renderContacts() {
		return _.map(this.props.contacts, contact => {
			return (
				<ListItem
					containerElement={<Link to={this.renderPath(contact)} />}
					value={contact.id}
					primaryText={this.renderName(contact)}
				/>
		 	);
		});
	}

	renderName(contact) {
		return `${contact.first_name} ${contact.last_name}`;
	}

	renderPath(contact) {
		return `/contacts/${contact.id}`;
	}

	render() {
		const { authenticated, contacts } = this.props;
		if (authenticated) {
			if (contacts && _.size(contacts) > 0) {
				return (
					<section className="contact-list">
						<SelectableList>
							<Subheader>Contacts ({_.size(contacts)})</Subheader>
							{this.renderContacts()}
						</SelectableList>
					</section>
				);
			} else {
				return (
					<section className="contact-list">
						<List>
							<Subheader>No Contacts Yet!</Subheader>
						</List>
					</section>
				);
			}
		} else {
			return <div></div>;
		}
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated,
		contacts: state.contacts
 	};
}

export default connect(mapStateToProps)(ContactList);

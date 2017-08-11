import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';
import _ from 'lodash';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

class ContactList extends Component {
	render() {
		console.log(this.props);
		if (this.props.authenticated) {
			return (
				<div>
					<List>
			      <ListItem
			        primaryText="Chelsea Otakan"
			        leftIcon={<ActionGrade color={pinkA200} />}
			        rightAvatar={<Avatar src="images/chexee-128.jpg" />}
			      />
			      <ListItem
			        primaryText="Eric Hoffman"
			        insetChildren={true}
			        rightAvatar={<Avatar src="images/kolage-128.jpg" />}
			      />
			    </List>
		    	<Divider inset={true} />
			    <List>
			      <ListItem
			        primaryText="Adelle Charles"
			        leftAvatar={
			          <Avatar
			            color={pinkA200} backgroundColor={transparent}
			            style={{left: 8}}
			          >
			            A
			          </Avatar>
			        }
			        rightAvatar={<Avatar src="images/adellecharles-128.jpg" />}
			      />
			      <ListItem
			        primaryText="Adham Dannaway"
			        insetChildren={true}
			        rightAvatar={<Avatar src="images/adhamdannaway-128.jpg" />}
			      />
		    	</List>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		authenticated: state.auth.authenticated
 	};
}

export default connect(mapStateToProps)(ContactList);

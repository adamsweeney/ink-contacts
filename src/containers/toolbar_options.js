import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const titleStyle = { marginLeft: 15, color: "black" };

class ToolbarOptions extends Component {
	renderLinks() {
		if(this.props.authenticated) {
			return  (
				<ToolbarGroup>
					<ToolbarSeparator />
					<Link to="/contacts/new">
						<RaisedButton label="Add Contact" primary={true} style={ {marginRight: 10} } />
					</Link>
					<Link to="/signout">
						<RaisedButton label="Sign out" primary={true} />
					</Link>
				</ToolbarGroup>
			);
		} else {
			return (
				<ToolbarGroup>
					<Link to="/signin">
						<RaisedButton label="Sign in" primary={true} style={ {marginRight: 10} } />
					</Link>
					<Link to="/signup">
						<RaisedButton label="Sign up" primary={true} />
					</Link>
				</ToolbarGroup>
			);
		}
	}
	render() {
    return (
			<div className="toolbar">
	      <Toolbar>
	        <ToolbarGroup firstChild={true}>
						<ToolbarTitle style={titleStyle} text="Contacts App" />
	        </ToolbarGroup>
	        {this.renderLinks()}
	      </Toolbar>
			</div>
    );
  }
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(ToolbarOptions);

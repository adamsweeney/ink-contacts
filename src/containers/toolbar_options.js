import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const titleStyle = { marginLeft: 15, color: "black" };

class ToolbarOptions extends Component {
	renderLinks() {
		if(this.props.authenticated) {
			return  (
				<ToolbarGroup>
					<IconMenu
					iconButtonElement={
						<IconButton touch={true}>
							<ContentFilter />
						</IconButton>
						}
					>
						<MenuItem primaryText="Download" />
						<MenuItem primaryText="More Info" />
					</IconMenu>
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
						<RaisedButton label="Sign in" primary={true} />
					</Link>
					<RaisedButton label="Sign up" primary={true} />
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

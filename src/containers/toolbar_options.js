import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const titleStyle = { marginLeft: 15, color: "black" };
const toolbarStyle = { backgroundColor: "white"}
class ToolbarOptions extends Component {
	render() {
    return (
			<div className="toolbar">
	      <Toolbar style={toolbarStyle}>
	        <ToolbarGroup firstChild={true}>
						<ToolbarTitle style={titleStyle} text="Contacts App" />
	        </ToolbarGroup>
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
	          <RaisedButton label="Add Contact" primary={true} />
	        </ToolbarGroup>
	      </Toolbar>
			</div>
    );
  }
}

export default ToolbarOptions;

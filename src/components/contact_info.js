import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ContactInfo = (props) => {
	const { first_name, last_name, phone_number, email } = props.info;
	const rowText = {textAlign: "center"};
	return (
	  <Table selectable={false}>
	    <TableBody displayRowCheckbox={false}>
	      <TableRow>
	        <TableRowColumn style={rowText}>First Name:</TableRowColumn>
	        <TableRowColumn style={rowText}>{first_name}</TableRowColumn>
	      </TableRow>
	      <TableRow>
	        <TableRowColumn style={rowText}>Last Name:</TableRowColumn>
	        <TableRowColumn style={rowText}>{last_name}</TableRowColumn>
	      </TableRow>
	      <TableRow>
	        <TableRowColumn style={rowText}>Phone Number:</TableRowColumn>
	        <TableRowColumn style={rowText}>{phone_number}</TableRowColumn>
	      </TableRow>
	      <TableRow>
	        <TableRowColumn style={rowText}>Email:</TableRowColumn>
	        <TableRowColumn style={rowText}>{email}</TableRowColumn>
	      </TableRow>
	    </TableBody>
	  </Table>
	);
};

export default ContactInfo;

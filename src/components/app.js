import React, { Component } from 'react';
import ContactList from '../containers/contact_list';
import ToolbarOptions from '../containers/toolbar_options';

export default class App extends Component {
  render() {
    return (
      <div>
        <ToolbarOptions />
        {this.props.children}
      </div>
      // <div className="row">
      //   <div className="col-lg-3 col-md-3 col-sm-3 contact-list">
      //     <ContactList />
      //   </div>
      //   <div className="col-lg-9 col-md-9 col-sm-9">
      //     <div className="row">
      //       <div className="col-lg-12 col-md-12 col-sm-12">
  		// 			  <ToolbarOptions />
      //         {this.props.children}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

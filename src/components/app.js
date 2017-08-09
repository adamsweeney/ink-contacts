import React, { Component } from 'react';
import ContactList from '../containers/contact_list.js';
import ToolbarOptions from '../containers/toolbar_options.js';
import ProfileImage from '../components/profile_image.js';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3 contact-list">
          <ContactList />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9">
          <div className="row">
            <ToolbarOptions />
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="row">
                <ProfileImage />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

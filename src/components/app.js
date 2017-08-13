import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchContacts } from '../actions';
import ContactList from '../containers/contact_list';
import ToolbarOptions from '../containers/toolbar_options';

class App extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.fetchContacts();
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <ToolbarOptions />
        </div>
        <div className="row row-flex">
          <div className="col-lg-3 col-md-3 col-sm-3 contact-column">
            <ContactList />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-9">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    authenticated: state.auth.authenticated
  }
}

export default withRouter(connect(mapStateToProps, { fetchContacts })(App));

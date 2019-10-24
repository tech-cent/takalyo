import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhoneVerification from '../components/verify';

export default class VerificationSuccess extends Component {

  /**
   * handles click event on success button
   * redirects to login page
   * @param event
   * @returns {void}
   */
  handleClick = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('login');
  }

  render() {
    return (
      <div className="signup">
        <PhoneVerification handleClick={this.handleClick} success/>
      </div>
    );
  }
}

VerificationSuccess.propTypes = {
  history: PropTypes.func
};

import React, { Component } from 'react';
import PhoneVerification from '../components/verify';

export default class VerificationView extends Component {
  render() {
    return (
      <div className="signup">
        <PhoneVerification />
      </div>
    );
  }
}
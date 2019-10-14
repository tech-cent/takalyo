import React, { Component } from 'react';
import PhoneVerification from '../components/verify';

export default class VerificationSuccess extends Component {
  render() {
    return (
      <div className="signup">
        <PhoneVerification success/>
      </div>
    );
  }
}
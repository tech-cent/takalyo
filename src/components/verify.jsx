import React from 'react';
import SignupButton from './common/signupButton';
import InputField from './common/inputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

// eslint-disable-next-line react/prop-types
const PhoneVerification = ({success}) => {
  return (
    <div className="signupcontainer">
      <div className="signupcontainer__header">
        <h3>Taka <span>Lyo</span></h3>
      </div>
      <div className="signupcontainer__form">
        {
          (!success) && (
            <div>
              <h3>Verify Phone Number</h3>
              <div className="container__form__linksignup">
                <p>An sms with a 6 digit one-time password<br/>has been sent to +256-7*****</p>
              </div>
              <div className="container__form__numbers">
                <InputField fieldType="verify" />
                <InputField fieldType="verify" />
                <InputField fieldType="verify" />
                <InputField fieldType="verify" />
                <InputField fieldType="verify" />
                <InputField fieldType="verify" />
              </div>
              <SignupButton form="verify" />
            </div>
          )
        }
        {
          (success) && (
            <div>
              <h3>Verification Successful</h3>
              <div className="container__form__linksignup">
                <p>Your number has been<br/>successfully verified</p>
              </div>
              <div className="container__form__icon">
                <FontAwesomeIcon icon={faCheckCircle} size="5x" style={{ color: '#94D52A'}}/>
              </div>
              <SignupButton form="proceed" />
            </div>
          )
        }
        
      </div>
    </div>
  );
};

export default PhoneVerification;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../../assets/styles/input.scss';

const InputField = ({ fieldType }) => {
  return (
    <div className="input">
      {
        (fieldType.toLowerCase() === 'username') && (
          <div className="input-container">
            <div className="input-icon">
              <FontAwesomeIcon icon={faUser} size="sm" style={{ color: '#4A4A4A'}}/>
            </div>
            <input type="text" placeholder="Username" className="input-field"/>
          </div>
        )
      }
      {
        (fieldType.toLowerCase() === 'contact') && (
          <div className="input-container">
            <div className="input-icon">
              <span>+256</span>
            </div>
            <input type="text" placeholder="Phone No." className="input-field"/>
          </div>
        )
      }
      {
        (fieldType.toLowerCase() === 'password') && (
          <div className="input-container">
            <div className="input-icon">
              <FontAwesomeIcon icon={faLock} size="sm" style={{ color: '#4A4A4A'}}/>
            </div>
            <input type="password" placeholder="Password" className="input-field"/>
          </div>
        )
      }
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  fieldType: PropTypes.string,
};

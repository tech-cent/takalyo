import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../../assets/styles/input.scss';

const InputField = ({ fieldType, handleChange }) => {
  return (
    <div className="input">
      {
        (fieldType.toLowerCase() === 'username') && (
          <div className="input-container">
            <div className="input-icon">
              <FontAwesomeIcon icon={faUser} size="sm" style={{ color: '#4A4A4A'}}/>
            </div>
            <input type="text" name="username" placeholder="Username" className="input-field" onChange={handleChange} required/>
          </div>
        )
      }
      {
        (fieldType.toLowerCase() === 'contact') && (
          <div className="input-container">
            <div className="input-icon">
              <span>+256</span>
            </div>
            <input type="text" name="phone_number" placeholder="Phone No." className="input-field" onChange={handleChange} required/>
          </div>
        )
      }
      {
        (fieldType.toLowerCase() === 'password') && (
          <div className="input-container">
            <div className="input-icon">
              <FontAwesomeIcon icon={faLock} size="sm" style={{ color: '#4A4A4A'}}/>
            </div>
            <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} required/>
          </div>
        )
      }
      {
        (fieldType.toLowerCase() === 'verify') && (
          <div className="verify_container">
            <input type="text" name="codeDigit" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" onChange={handleChange} required/>
          </div>
        )
      }
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  fieldType: PropTypes.string,
  handleChange: PropTypes.func
};

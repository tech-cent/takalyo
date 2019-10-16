import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/error.scss';

const FormError = ({ message }) => {
  console.log('message-typoe', typeof message);
  return (
    <div className="error-container">
      <div className="error-container__icon">
        <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
      </div>
      <p>{((typeof message === 'string') && message) || 'please check your credentials'}</p>
    </div>
  );
};

export default FormError;

FormError.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

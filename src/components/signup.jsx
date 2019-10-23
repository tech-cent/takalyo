import React from 'react';
import PropTypes from 'prop-types';
import InputField from './common/inputField';
import '../assets/styles/signup.scss';
import { NavLink } from 'react-router-dom';
import SignupButton from './common/signupButton';
import FormError from './common/formError';
import Spinner from './common/spinner';


const Signup = ({ handleChange, handleSubmit, isLoading, error, errorMessage }) => {
  return (
    <div className="signupcontainer">
      <div className="signupcontainer__header">
        <h3>Taka <span>Lyo</span></h3>
      </div>
      <div className="signupcontainer__form">
        <h3>Sign Up</h3>
        <InputField fieldType="username" handleChange={handleChange}/>
        <InputField fieldType="contact" handleChange={handleChange}/>
        <InputField fieldType="password" handleChange={handleChange}/>
        {
          error && <FormError message={errorMessage}/>
        }
        {!isLoading && <SignupButton form="signup" handleSubmit={handleSubmit}/>}
        {isLoading && <Spinner/>}
        <div className="container__form__linksignup">
          <p>Have account already?<NavLink to="/login">Login</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

Signup.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

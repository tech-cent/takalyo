import React from 'react';
import InputField from './common/inputField';
import '../assets/styles/signup.scss';
import { NavLink } from 'react-router-dom';
import SignupButton from './common/signupButton';



const Signup = () => {
  
  return (
    <div className="signupcontainer">
      <div className="signupcontainer__header">
        <h3>Taka <span>Lyo</span></h3>
      </div>
      <div className="signupcontainer__form">
        <h3>Sign Up</h3>
        <InputField fieldType="username"/>
        <InputField fieldType="contact"/>
        <InputField fieldType="password"/>
        <SignupButton form="signup"/>
        <div className="container__form__linksignup">
          <p>Have account already?<NavLink to="/login">Login</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

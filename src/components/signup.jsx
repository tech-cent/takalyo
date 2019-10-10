import React from 'react';
import InputField from './common/inputField';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import '../assets/styles/signup.scss';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  ButtonArea: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    margin: '10px auto',
  },
  Button: {
    borderRadius: 33,
    width: 200,
    color: '#fff',
    padding: '10px 30px',
    background: '#94D52A',
    '&:hover': {
      background: '#7ec0ee'
    } 
  }
}));

const Signup = () => {
  const classes = useStyles();
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
        <div className={classes.ButtonArea}>
          <Button className={classes.Button}>Signup</Button>
        </div>
        <div className="container__form__linksignup">
          <p>Have account already?<NavLink to="/login">Login</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

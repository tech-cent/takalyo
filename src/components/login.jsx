import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import InputField from './common/inputField';
import '../assets/styles/login.scss';

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
    marginRight: 90,
    width: 200,
    color: '#fff',
    padding: '10px 30px',
    background: '#94D52A',
    '&:hover': {
      background: '#7ec0ee'
    } 
  }
}));

const Login  = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="container__brief">
        <h3>Secure<br/> Fast <br/>Reliable</h3>
      </div>
      <div className="container__form">
        <div className="container__form__heading">
          <h3>Taka <span>Lyo</span></h3>
        </div>
        <InputField fieldType="contact"/>
        <InputField fieldType="password"/>
        <div className="container__form__resetpw">
          <a>Forgot Password?</a>
        </div>
        <div className={classes.ButtonArea}>
          <Button className={classes.Button}>Login</Button>
        </div>
        <div className="container__form__linksignup">
          <p>Don't have an account?<span><a>Sign Up</a></span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

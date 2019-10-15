import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputField from './common/inputField';
import '../assets/styles/signup.scss';
import { NavLink } from 'react-router-dom';
import SignupButton from './common/signupButton';

const useStyles = makeStyles(theme => ({
  progressdiv: {
    display: 'flex',
    justifyContent: 'center'
  },
  progress: {
    margin: theme.spacing(2),
    color: green[500],
  },
}));

const Signup = ({ handleChange, handleSubmit, isLoading }) => {
  const classes = useStyles();
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
        {!isLoading && <SignupButton form="signup" handleSubmit={handleSubmit}/>}
        {isLoading && (
          <div className={classes.progressdiv}>
            <CircularProgress className={classes.progress} />
          </div>
        )}
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
  isLoading: PropTypes.bool
};

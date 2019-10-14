import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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

const SignupButton = ({form}) => {
  const classes = useStyles();

  return (
    <div className={classes.ButtonArea}>
      <Button className={classes.Button}>{form}</Button>
    </div>
  );
};

export default SignupButton;

SignupButton.propTypes = {
  form: PropTypes.string,
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.progressdiv}>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

export default Spinner;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Signup from '../components/signup';
import publicPostData from '../redux/middleware';
import signupAction from '../redux/actions/auth';

class SignupView extends Component {
  state = {
    username: '',
    phone_number: '',
    password: '',
    isLoading: false,
    error: false,
    errorMessage: '',
  }

  /**
   * handles user input
   * @param event
   * @returns {void}
   */
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    (name==='phone_number') ? this.setState({
      [name]: `256${value}`
    }) : this.setState({
      [name]: value
    });
  }

  /**
   * toogles boolean value in state property
   * @param name
   * @param value
   * @returns {void}
   */
  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }

  /**
   * handles submission of information to server
   * triggers the middleware function to creates the action
   * @param event
   * @returns {void}
   */
  handleSubmit = async (event) => {
    this.toggleState('isLoading', this.state.isLoading);
    event.preventDefault();
    const { publicPostData } = this.props;
    const { username, phone_number, password } = this.state;
    const data = {username, phone_number, password};
    const response = await publicPostData('/auth/signup/', signupAction, 'post', data);
    response && response.error && (
      this.setState({
        errorMessage: response.error,
        error: true
      }),
      this.toggleState('isLoading', this.state.isLoading)
    );
    response && response.data && (
      this.setState({
        error: false
      }),
      this.toggleState('isLoading', this.state.isLoading),
      localStorage.setItem('phone_number', phone_number),
      // eslint-disable-next-line react/prop-types
      this.props.history.push('/verify')
    );
  }

  render() {
    const { isLoading, errorMessage, error } = this.state;
    return (
      <div className="signup">
        <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit} isLoading={isLoading} error={error} errorMessage={errorMessage}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.authReducer.error,
    payload: state.authReducer.payload,
  };
};

export default connect(mapStateToProps, {publicPostData})(SignupView);

SignupView.propTypes = {
  publicPostData: PropTypes.func
};

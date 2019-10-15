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

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    (name==='phone_number') ? this.setState({
      [name]: `256${value}`
    }) : this.setState({
      [name]: value
    });
  }

  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }

  handleSubmit = async (event) => {
    this.toggleState('isLoading', this.state.isLoading);
    event.preventDefault();
    const { publicPostData } = this.props;
    const { username, phone_number, password } = this.state;
    const data = {username, phone_number, password};
    const response = await publicPostData('/auth/signup/', signupAction, 'post', data);
    response && response.error && (
      this.toggleState('error', this.state.error),
      this.setState({
        errorMessage: response.error
      }),
      this.toggleState('isLoading', this.state.isLoading)
    );
    response && response.data && (
      this.toggleState('isLoading', this.state.isLoading),
      // eslint-disable-next-line react/prop-types
      this.props.history.push('/verify')
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="signup">
        <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit} isLoading={isLoading}/>
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

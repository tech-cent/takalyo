import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PhoneVerification from '../components/verify';
import publicPostData from '../redux/middleware';
import verifyAction from '../redux/actions/verify';

class VerificationView extends Component {
  state = {
    code: '',
    isLoading: false,
    error: false,
    errorMessage: '',
  }

  handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      code: this.state.code + value
    });
  }

  toggleState = (name, value) => {
    this.setState({ [name]: !value });
  }


  handleSubmit = async (event) => {
    this.toggleState('isLoading', this.state.isLoading);
    event.preventDefault();
    const { publicPostData } = this.props;
    const { code } = this.state;
    const contact = localStorage.getItem('phone_number');
    const data = {
      'phone_number': contact,
      'code': code
    };
    const response = await publicPostData('auth/verify/', verifyAction, 'post', data);
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
      // eslint-disable-next-line react/prop-types
      this.props.history.push('/verify-success')
    );
  }

  render() {
    const { isLoading, error, errorMessage } = this.state;
    return (
      <div className="signup">
        <PhoneVerification handleChange={this.handleChange} handleSubmit={this.handleSubmit} isLoading={isLoading} error={error} errorMessage={errorMessage}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.verifyReducer.error,
    payload: state.verifyReducer.payload
  };
};


export default connect(mapStateToProps, {publicPostData})(VerificationView);

VerificationView.propTypes = {
  publicPostData: PropTypes.func
};

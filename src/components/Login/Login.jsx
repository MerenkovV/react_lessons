import React from 'react'
import { LoginForm } from './FormComponent'
import { connect } from 'react-redux';
import { LoginingInProfile, authCheck } from '../../redux/authReducer.ts'
import { Navigate } from 'react-router-dom';

export class Login extends React.Component {

  state = {
    isFetching: false
  }

  onSubmit = (data) => {
    this.setState({isFetching: true})
    this.props.LoginingInProfile(data.login, data.password, data.checkbox)
  }

  render() {
    if(this.props.isAuth === true && this.state.isFetching === true) this.setState({isFetching: false})
    return (
      <main className='main'>
        <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>Login</h1>
        {
          this.props.isAuth ? <Navigate to={'/profile'} /> : <LoginForm isFetching={this.state.isFetching} onSubmit={this.onSubmit} />
        }
      </main>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthorized
  }
};

export const LoginContainer = connect(mapStateToProps, { LoginingInProfile, authCheck })(Login)

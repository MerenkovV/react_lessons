import React from 'react'
import {LoginForm} from './FormComponent'
import { connect } from 'react-redux';
import {LoginingInProfile, authCheck} from '../../redux/authReducer'
import { Navigate } from 'react-router-dom';

export function Login(props) {

  const onSubmit = (data) => {
    console.log(data);
    props.LoginingInProfile(data.login, data.password, data.checkbox)
  }

  return (<main className='main'>
    <h1 style={{fontSize: "30px", marginBottom: "10px"}}>Login</h1>
    {
      props.isAuth ? <Navigate to={'/profile'}/> : <LoginForm onSubmit={onSubmit}/>
    }
    </main>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthorized
  }
};

export const LoginContainer = connect(mapStateToProps, {LoginingInProfile, authCheck})(Login)

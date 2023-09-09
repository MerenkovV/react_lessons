import React from 'react'
import { Field, reduxForm } from 'redux-form'


function FormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} name='login' placeholder={'login'}/></div>
        <div><Field component={'input'} name='password' type={'password'} placeholder={'Password'}/></div>
        <div><Field component={'input'} name='checkbox' type={'checkbox'}/> remember me</div>
        <div><button>Log in</button></div>
    </form>
  )
}

export let LoginForm = reduxForm({
    form: 'login'
})(FormComponent)

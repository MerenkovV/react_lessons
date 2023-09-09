import React from 'react'
import { Field, reduxForm } from 'redux-form'
import fetch from '../../image/Spinner.svg'
import TextareaWithErr from '../../commons/TextareaWithErr'
import { maxSymbolsCreator, requiredField } from '../../utils/validator'


const max30symbols = maxSymbolsCreator(30);

function FormComponent(props) {
  return (
    props.isFetching ? <img src={fetch} /> :
    <form onSubmit={props.handleSubmit}>
        <div><Field component={TextareaWithErr} tag={"input"} name='login' placeholder={'login'} validate={[requiredField, max30symbols]}/></div>
        <div><Field component={TextareaWithErr} type={"password"} tag={"input"} name='password' placeholder={'Password'} validate={[requiredField, max30symbols]}/></div>
        <div><Field component={'input'} name='checkbox' type={'checkbox'}/> remember me</div>
        <div><button>Log in</button></div>
    </form>
  )
}

export let LoginForm = reduxForm({
    form: 'login'
})(FormComponent)

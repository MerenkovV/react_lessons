import React from 'react'
import {LoginForm} from './FormComponent'

export default function Login() {

  const onSubmit = (data) => {
    console.log(data);
  }

  return (<main className='main'>
    <h1 style={{fontSize: "30px", marginBottom: "10px"}}>Login</h1>
    <LoginForm onSubmit={onSubmit}/>
    </main>
  )
}

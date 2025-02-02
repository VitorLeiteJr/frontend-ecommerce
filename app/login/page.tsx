"use client"
import React, { FormEvent } from 'react'
import { authLogin } from '../_functions/login';

const Login = () => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;  


        authLogin(email,password);
        //console.log(email,password);

           



    }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
      <input name='email' placeholder='Email'/>
      <input name='password' placeholder='Password'/>
      <button>Login</button>
      </form>
    </div>
  )
}

export default Login

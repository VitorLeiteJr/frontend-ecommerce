"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { authLogin } from '../_functions/login';
import { useRouter } from 'next/navigation';
import { checkAuth } from '../_functions/auth';

const Login = () => {
      const route = useRouter();
      const [error, setError] = useState("");


    useEffect(()=>{

        checkAuth(localStorage.getItem("token") as string);
    });


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();


        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;  


       const login = await authLogin(email,password);
      
       console.log(login)
       if(!login){ 
        setError("credentials are wrong");
        return;
      }
      route.push("/");


    }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
      <input name='email' placeholder='Email'/>
      <input name='password' placeholder='Password'/>
      <button>Login</button>
      <p className='text-black'>{error}</p>
      </form>
    </div>
  )
}

export default Login

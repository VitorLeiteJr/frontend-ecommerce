"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { authLogin } from '../_functions/login';
import { useRouter } from 'next/navigation';
//import { checkAuth } from '../_functions/auth';
import { useAuth } from '../_components/context/auth';

const Login = () => {
      const router = useRouter();
      const [error, setError] = useState<string>("");

      const {token, login } = useAuth();
      

      useEffect(() => {
        
        if (token) {
           router.push("/"); // Redirect if authenticated
        }
      }, [token, router]);

   // useEffect(()=>{
        
      // const check = async()=>{

      //  const auth = await checkAuth(localStorage.getItem("token") as string);

      //  if(auth)route.push('/');

      //  };
      //  check();
 //   });


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;  


       const loginAuth = await authLogin(email,password);
       if(!loginAuth){ 
        setError("credentials are wrong");
        return;
      }
      login(loginAuth);
      //console.log(login);
      //router.push("/");


    }
   

  return (
    <div>
        <form  onSubmit={handleSubmit}>
      <input name='email' placeholder='Email' required/>
      <input name='password' placeholder='Password' required/>
      <button>Login</button>
      <p className='text-black'>{error}</p>
      </form>
    </div>
  )
}

export default Login

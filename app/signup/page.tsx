"use client"
import React, { FormEvent, useState } from 'react'
import { signUp } from '../_functions/signUp'

const SignUp = () => {

    const [errorSignup, setErrorSignup]= useState<boolean>(false);



    const handleSignUp = async(event: FormEvent<HTMLFormElement>) => {
       const response = await signUp(event);
        if(response) alert("success");
        else setErrorSignup(true);
        

    }

  return (
    <div>
        <form onSubmit={handleSignUp}>
      <input name="name" placeholder="name" />
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <button>Sign Up</button>
        </form>
        {errorSignup && <p>Something went wrong</p>}
    </div>
  )
}

export default SignUp

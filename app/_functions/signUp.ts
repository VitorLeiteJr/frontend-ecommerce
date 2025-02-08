import axios from "axios";
import { FormEvent } from "react";

export const signUp = async (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
     const name = formData.get("name") as string;
     const email = formData.get("email") as string;
     const password = formData.get("password") as string;   

     try{
           const signup = await axios.post("http://localhost:3001/api/user/signup", {name,email,password});  
            if(!signup.data.status) return false;
            return true;
     }catch{
            return false;
     }



}
import axios from "axios";

export const authLogin = async (email: string, password: string) =>{

try{

const login = await axios.post("http://localhost:3001/api/user/login", {email,password});

console.log(login.data);

return true;
}catch{
    console.log("something go wrong");
    return false;
}

}
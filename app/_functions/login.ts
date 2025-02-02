import axios from "axios";

export const authLogin = async (email: string, password: string) =>{

try{

await axios.post("", {email,password})

return true;
}catch{
    return false;
}

}
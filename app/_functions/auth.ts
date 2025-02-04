import axios from "axios";

export const checkAuth = async(token: string) =>{

try{

    await axios.post("http://localhost:3001/api/user/auth",{token})
    return true;

}catch{
    return false;
}
    
}
import { login } from "./auth.js";

const btnLogin= document.getElementById("button-login");

btnLogin.addEventListener("click",async(e)=>{
    try{
        await login();
    }catch(e){

    }
})
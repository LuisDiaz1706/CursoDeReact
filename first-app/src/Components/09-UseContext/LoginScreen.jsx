import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginScreen = ()=>{
    const {hola,user} = useContext(UserContext)
    console.log(hola,user);
return (
    <>
    <h1>Login Screen</h1>
    <hr/>

    <pre>
        {
            JSON.stringify(user,null,3)
        }
    </pre>
    </>
)
}
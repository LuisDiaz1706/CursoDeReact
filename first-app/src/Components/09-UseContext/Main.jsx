import React from "react";
import { Navigate, Route, Routes,Link } from "react-router-dom";
import { AboutScren } from "./AboutScreen";
import { UserProvider } from "./context/UserProvider";
import { HomeScren } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { Navbar } from "./Navbar";

export const MainScreen = ()=>{
return (
    <UserProvider>
    {/* <h1>Main APP</h1> */}
    <Navbar></Navbar>
    <hr/>
 
    <Routes>
        <Route path="/" element={<HomeScren/>}/>
        <Route path="login" element={<LoginScreen/>}/>
        <Route path="about" element={<AboutScren/>}/>

        <Route path="/*" element={<Navigate to="/about"/>}/>
    </Routes>
    </UserProvider>
)
}
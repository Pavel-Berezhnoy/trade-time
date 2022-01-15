import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "../components/login/Login";
import Main from "../components/main/Main";
import Register from "../components/register/Register";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    );
}

export default Content;
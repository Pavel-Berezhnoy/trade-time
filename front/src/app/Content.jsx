import React from "react";
import { Routes, Route } from 'react-router-dom';
import AllLots from "../components/allLots/AllLots";
import Login from "../components/login/Login";
import Lot from "../components/lot/Lot";
import Main from "../components/main/Main";
import Register from "../components/register/Register";
import CreateLot from "../components/createLot/CreateLot";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/all-lots" element={<AllLots/>}></Route>
            <Route path="/lot/:id" element={<Lot/>}></Route>
            <Route path="/create-lot" element={<CreateLot/>}></Route>
        </Routes>
    );
}

export default Content;
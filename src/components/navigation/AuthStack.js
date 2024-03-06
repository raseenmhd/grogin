import React from 'react';
import { Routes, Route } from "react-router-dom";


import Login from "./../screens/login/Login";
import Signup from "../screens/signup/Signup";


function AuthStack() {

  return (
    <Routes >
      <Route path='/' element={<Login />} />
      <Route path="/auth/register" element={<Signup />} />
    </Routes>
  );
}

export default AuthStack;

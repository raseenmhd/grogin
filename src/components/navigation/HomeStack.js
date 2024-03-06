import React from 'react';
import { Routes, Route } from "react-router-dom";


import Main from "../screens/mainPage/Main"
import SinglePage from "../screens/detailsPage/SinglePage"


import {Products} from './../data/data';


function HomeStack() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/product/:Id" element={<SinglePage data={Products}/>} />
    </Routes>
    </>
  )
}

export default HomeStack

import React ,{useState} from 'react';
import { Routes, Route } from "react-router-dom";


import Main from "../screens/mainPage/Main"
import SinglePage from "../screens/detailsPage/SinglePage"


import {Products} from './../data/data';


function HomeStack() {

  const [isprofileopen, setProfile] = useState(false);

	const toggleProfile = () => {
		setProfile(!isprofileopen);
	}
  return (
    <>
      <Routes>
          <Route path='/' element={<Main toggleProfile={toggleProfile} isprofileopen={isprofileopen}/>} />
          <Route path="/product/:productId" element={<SinglePage data={Products} toggleProfile={toggleProfile} isprofileopen={isprofileopen}/>} />
      </Routes>
    </>
  )
}
export default HomeStack

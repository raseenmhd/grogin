import './App.css';
import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import AuthStack from './components/navigation/AuthStack';
import HomeStack from './components/navigation/HomeStack';

export const UserContext = React.createContext();

function App() {  
	const [userData , setUserData] = useState({});
	const navigate = useState();
	const updateUserData = (action) => {
		switch (action.type){
			case "LOGOUT":
				setUserData({});
				localStorage.clear();
				navigate("/")
				break;
			case "LOGIN":
				setUserData(action.payload);
				break;
			default:
				break;
		}
	};

	useEffect( () => {
	  setUserData( JSON.parse(localStorage.getItem("user_data")));
	},[]);
  
  	
  return (
	<>
		<UserContext.Provider value={{userData , updateUserData}}>
			<Router>
				{userData?.access ? <HomeStack /> : <AuthStack />}
			</Router>
		</UserContext.Provider>
	</>
  );
}

export default App;

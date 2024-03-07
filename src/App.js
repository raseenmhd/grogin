import './App.css';
import { useState , useEffect } from 'react';
import { BrowserRouter as Router, } from "react-router-dom";

import AuthStack from './components/navigation/AuthStack';
import HomeStack from './components/navigation/HomeStack';


function App() {  
    const [userData , setUserData] = useState({});

    useEffect( () => {
      setUserData( JSON.parse(localStorage.getItem("user_data")));
    },[]);
  
  	
  return (
      <Router>
        {userData?.access ? <HomeStack /> : <AuthStack />}
      </Router>
  );
}

export default App;

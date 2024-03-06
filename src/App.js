import './App.css';
import { BrowserRouter as Router, } from "react-router-dom";

import AuthStack from './components/navigation/AuthStack';
import HomeStack from './components/navigation/HomeStack';
import { useState } from 'react';

function App() {
  	const [is_verfied,setIsVerfied] = useState(true)
  return (
    <Router>
      {is_verfied ? <HomeStack /> : <AuthStack />}
      </Router>
  );
}

export default App;

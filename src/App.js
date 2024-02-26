import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainHeader from "./components/includes/MainHeader"
import HeaderPage from './components/screens/HeaderPage';
import LoginPage from './components/screens/LoginPage';
import Signup from './components/screens/Signup';

function App() {
  return (
	<Router>
		<MainHeader/>
		<Routes>
			<Route path='/' element={<HeaderPage />}/>
			<Route path='login' element={<LoginPage />}/>
			<Route path='signup' element={<Signup/>}/>
		</Routes>
	</Router>
  );
}

export default App;

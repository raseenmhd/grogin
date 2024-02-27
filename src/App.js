import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LoginPage from './components/screens/LoginPage';
import Signup from './components/screens/Signup';
import Main from './components/screens/Main';

function App() {
  return (
	<Router>
		<Routes>
			<Route path='/' element={<Main />}/>
			<Route path='login' element={<LoginPage />}/>
			<Route path='signup' element={<Signup/>}/>
		</Routes>
	</Router>
  );
}

export default App;

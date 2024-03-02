import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Main from './components/screens/Main';
import SinglePage from './components/screens/SinglePage';

import {Products} from './components/data/data';

function App() {
	

  return (
	<Router>
		<Routes>
			<Route path='/' element={<Main />}/>
			<Route path='login' element={<Login />}/>
			<Route path='signup' element={<Signup/>}/>
			<Route path="/product/:productId" element={<SinglePage data={Products} />} />
		</Routes>
	</Router>
  );
}

export default App;

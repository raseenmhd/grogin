import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainHeader from "./components/includes/MainHeader"
import HeaderPage from './components/screens/HeaderPage';

function App() {
  return (
	<Router>
		<MainHeader/>
		<Routes>
			<Route path='' element={<HeaderPage />}/>
		</Routes>
	</Router>
  );
}

export default App;

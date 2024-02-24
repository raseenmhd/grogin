import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainHeader from "./components/includes/MainHeader"

function App() {
  return (
	<Router>
		<Routes>
			<Route path='' element={<MainHeader/>}/>
		</Routes>
	</Router>





  );
}

export default App;

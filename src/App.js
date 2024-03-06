import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthStack from './components/navigation/AuthStack';
import HomeStack from './components/navigation/HomeStack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<AuthStack />} />
        <Route path='/home' element={<HomeStack />} />
      </Routes>
    </Router>
  );
}

export default App;

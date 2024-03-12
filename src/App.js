import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from './components/context/Store';
import AuthStack from './components/navigation/AuthStack';
import HomeStack from './components/navigation/HomeStack';
import { useStore } from './components/context/Store';


function App() {
  return (
    <StoreProvider>
      <Router>
        <AppRouter />
      </Router>
    </StoreProvider>
  );
}

function AppRouter() {
  const { userData } = useStore(); 

  return (
    <>
      {userData?.access ? <HomeStack /> : <AuthStack />}
    </>
  );
} 

export default App;

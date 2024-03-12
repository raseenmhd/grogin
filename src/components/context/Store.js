import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { initialState, reducer } from './Reducer';

export const UserContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
	const userData = JSON.parse(localStorage.getItem("user_data"));
	if (userData) {
	  dispatch({ type: "LOGIN", payload: userData });
	}
  }, []);

  return (
	<UserContext.Provider value={{ userData: state.userData, dispatch }}>
	  {children}
	</UserContext.Provider>
  );
};

export const useStore = () => useContext(UserContext);

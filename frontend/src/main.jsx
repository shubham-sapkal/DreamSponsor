import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';

export const server = "https://dreamsponsor.onrender.com/api/v1";

export const Context = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {}
});

const AppWrapper = () => {

  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const [ loading, setIsLoading ] = useState(false);
  const [ user, setUser ] = useState({})

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setIsLoading,
        user,
        setUser
      }}>
      <App />
    </Context.Provider>
  );

}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>,
)

import React, { useContext } from 'react'

import { Context } from '../main';

// import { Navigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Home = () => {

  const { isAuthenticated } = useContext(Context);

  if(!isAuthenticated){
      return <Redirect to="/login" />
  }

  return (
    <div>Home</div>
  )
}

export default Home;
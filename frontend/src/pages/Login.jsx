import React, { useContext, useState } from 'react';

import "./Login.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { server, Context } from '../main';

import axios from 'axios';

import { toast } from 'react-hot-toast';

const Login = () => {

  const ctx = useContext(Context);

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = event => {
    setPassword(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    ctx.setIsLoading(true);

    console.log(email + " " + password);

    try {

      const { data }= await axios.post( 
        `${server}/users/login`,
        {
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        }
      );

      console.log("Login Successfull!");

      toast.success(data.message);

      ctx.setIsAuthenticated(true);
        
      ctx.setIsLoading(false);

    }catch(error){
      toast.error(error);
      ctx.setIsAuthenticated(false);
      ctx.setIsLoading(false);
    }
  }

  return (
    <div>

        <form onSubmit={submitHandler}>
            <input type="text" name="email" value={email} placeholder='Email' onChange={emailChangeHandler} />
            <input type="password" name="password" value={password} placeholder='Password' onChange={passwordChangeHandler} />

            <button type="submit">Login</button>

            <h3>Not Registered? <Link to="/register">Register Here</Link>  </h3>
        </form>

    </div>
  )
}

export default Login
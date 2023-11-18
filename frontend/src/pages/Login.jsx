import React, { useContext, useState } from 'react';

import "./Login.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { server, Context } from '../main';

import { Redirect } from 'react-router-dom';

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

    console.log(email + password);

    try {

      const response = await fetch(`${server}/users/login`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': "*"
          },
          body: JSON.stringify({
              email,
              password
          })
      });

      const data = await response.json();

      console.log("Login Successfull!");
      console.log(data);
      toast.success(data.message);

      ctx.setIsAuthenticated(true);

      ctx.setIsLoading(false);

    } catch (error) {
      console.log("Login Error: " + error);
      // toast.error(error.response.data.message);
      ctx.setIsAuthenticated(false);
      ctx.setIsLoading(false);
    }

  }

  if(ctx.isAuthenticated) {
    return <Redirect to="/" />
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
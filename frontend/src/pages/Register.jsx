import React, { useContext, useState } from 'react';

import "./Login.css";
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { server, Context } from '../main';
import toast from 'react-hot-toast';

const Register = () => {

  const ctx = useContext(Context);

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const nameChangeHandler = event => {
    setFname(event.target.value);
  }

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = event => {
    setPassword(event.target.value);
  }


  const submitHandler =  async (event) => {
    event.preventDefault();

    // console.log(fname + " " + email + " " + password);

    ctx.setIsLoading(true);

    try {

        const response = await fetch(`${server}/users/register`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
              name: fname,
              email,
              password
          })
        });

        const data = await response.json();

        toast.success(data.message);
        ctx.setIsAuthenticated(true);
        ctx.setIsLoading(false);

    } catch(error) {
      console.log("Error In Register:" + error );
      toast.error(error.response.data.message);
      ctx.setIsAuthenticated(false);
      ctx.setIsLoading(false);
    }


    setFname("");
    setPassword("");
    setEmail("");

  }

  if(ctx.isAuthenticated){
    return <Redirect to="/" />
  }

  return (
    <div>

        <form onSubmit={submitHandler}>
            <input type="text" name="fname" value={fname} placeholder='Full Name' onChange={nameChangeHandler}/>
            <input type="text" name="email" value={email} placeholder='Email' onChange={emailChangeHandler}/>
            <input type="password" name="password" value={password} placeholder='Password' onChange={passwordChangeHandler}/>
           
            <button className="login__btn" type="submit">Register</button>

            <h3>Already Registered? <Link to="/login">Login Here</Link>  </h3>
        </form>

    </div>
  )
}

export default Register
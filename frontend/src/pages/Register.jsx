import React from 'react';

import "./Login.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Register = () => {
  return (
    <div>

        <form >
            <input type="text" name="fname" placeholder='Full Name'/>
            <input type="text" name="email" placeholder='Email' />
            <input type="password" name="password" placeholder='Password' />
            <input type="password" name="confpassword" placeholder='Confirm Password' />

            <button type="submit">Login</button>

            <h3>Already Registered? <Link to="/login">Login Here</Link>  </h3>
        </form>

    </div>
  )
}

export default Register
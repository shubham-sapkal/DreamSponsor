import React from 'react';

import "./Login.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  return (
    <div>

        <form >
            <input type="text" name="email" placeholder='Email' />
            <input type="password" name="password" placeholder='Password' />

            <button type="submit">Login</button>

            <h3>Not Registered? <Link to="/register">Register Here</Link>  </h3>
        </form>

    </div>
  )
}

export default Login
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import NavBar from "./components/Nav/NavBar";

import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;

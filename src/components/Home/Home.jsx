import React from "react";
import { Link } from "react-router-dom";
import Apps from "./Apps";
import './Home.css';

function Home(props) {
  return (
    <>
      <div className="container1">
      <div className="container2">
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2 className="nameh">{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>

      
    </div>
    <div>
      <Apps/>
    </div>
    </>
  );
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

function NavBar(props) {
  const navButtons = props.isLoggedIn ? (
  <div>
    <Link to="/login" onClick={props.handleLogin}>
        <Button> Logout </Button>
    </Link>
  </div>
  ) : (
  <div>
      <Link to="/register">
        <Button> Register </Button>
    </Link>
  </div>
  );
  return (
    <main>
      <header className="navbar"> 
      <Link to="/tasks">
      Task Juggler
      </Link>
      { navButtons }
      </header> <br />
    </main>
  );
}

export default NavBar;

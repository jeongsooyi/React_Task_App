import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TaskContainer from "./components/TaskContainer";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import TaskDetail from "./components/TaskDetail";
import DeleteTask from "./components/DeleteTask";

function App() {
    const [isLoggedIn, setAccountLogin] = useState(true);

    function LogInOut() {
        setAccountLogin((prevState) => !prevState);
        console.log(isLoggedIn);
      }
    
  return (
    <main>
      <Router>
        <div className="App">
          <NavBar isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } />
          <br />
          <Switch>
            <Route path="/" exact isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } component={ isLoggedIn ? TaskContainer : Login} />
            <Route path="/register" component={ Register } />
            <Route path="/tasks" exact isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } component={ isLoggedIn ? TaskContainer : Login} />
            <Route path="/tasks/:taskId" isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } component={ isLoggedIn ? TaskDetail : Login}/>
            <Route path="/login"  isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } component={ isLoggedIn ? TaskContainer : Login} />
            <Route path="/addTask" isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } component={ isLoggedIn ? AddTask : Login} />
            <Route path="/editTask/:taskId" isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } component={ isLoggedIn ? EditTask : Login} />
            <Route path="/deleteTask/:taskId" isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } component={ isLoggedIn ? DeleteTask : Login} />
            <Route path="/" isLoggedIn = { isLoggedIn } handleLogin = { LogInOut } component={ isLoggedIn ? TaskContainer : Login} />
          </Switch>
        </div>
      </Router>
    </main>
  );
}

export default App;

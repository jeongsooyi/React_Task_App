import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TaskContainer from "./components/TaskContainer";
import Login from "./components/Login";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

function App() {
    return ( <
        main >
        <
        Router >
        <
        div className = "App" >
        <
        header className = "navbar" > Task Management System < /header> <br / >
        <
        br / >
        <
        Switch >
        <
        Route path = "/"
        exact component = { TaskContainer }
        />{" "} <
        Route path = "/login"
        component = { Login }
        />{" "} <
        Route path = "/addTask"
        exact component = { AddTask }
        />{" "} <
        Route path = "/editTask"
        exact component = { EditTask }
        />{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /Router>{" "} <
        /main>
    );
}

export default App;
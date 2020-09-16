import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
    state = {
        id: "",
        password: "",
    };
    render() {
        return ( <
            main >
            <
            div className = "container" >
            <
            h1 > Login < /h1>{" "} <
            Form className = "login-form" >
            <
            Form.Group controlId = "formBasicEmail" >
            <
            Form.Label > Email address < /Form.Label>{" "} <
            Form.Control type = "email"
            placeholder = "Enter email"
            value = { this.state.id }
            />{" "} <
            /Form.Group>{" "} <
            Form.Group controlId = "formBasicPassword" >
            <
            Form.Label > Password < /Form.Label>{" "} <
            Form.Control type = "password"
            placeholder = "Password"
            value = { this.state.password }
            />{" "} <
            /Form.Group>{" "} <
            br / >
            <
            br / >
            <
            Button variant = "primary"
            type = "submit" >
            Login { " " } <
            /Button>{" "} <
            /Form>{" "} <
            /div>{" "} <
            /main>
        );
    }
}

export default Login;
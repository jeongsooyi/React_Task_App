import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      password: "",
      confirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(event){
    console.log("Register API call")
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(this.state)
    }
    fetch('https://localhost:44334/api/auth/register', requestOptions)
      .then(response => response.json())
      .then((response) => {
        const Status = response;
        console.log(Status);
      });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <main>
        <div className="container">
          <h1> Register </h1>
          <br />
          <Form className="register-form" onSubmit= {this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label> Email address </Form.Label>
              <Form.Control
                name="id"
                type="email"
                placeholder="Enter email"
                value={this.state.id}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label> Confirm Password </Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
            <Link to="/login">
              <Button>Back</Button>
            </Link>
          </Form>
          <br />
          <br />
        </div>
      </main>
    );
  }
}

export default Register;

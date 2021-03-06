import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(){
    super()
    this.state = {
      id: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  handleSubmit(event){

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
          <h1> Login </h1>
          <br />
          <Form className="login-form" onSubmit={this.handleSubmit}>
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
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <br />
          <br />
          <h5>
            Don't have an account? <Link to='/register'>Register</Link>{" "}
          </h5>
        </div>
      </main>
    );
  }
}

export default Login;

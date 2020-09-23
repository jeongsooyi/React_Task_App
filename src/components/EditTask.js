import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class EditTask extends Component {
  constructor(){
    super()
    this.state = {
    taskTitle: "",
    taskDescription: "",
    taskStatus: "",
    taskDueDate: "",
    taskRequestedBy: "",
    taskAssignedTo: "",
    taskPriority: "",
  };
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(){
    
  }

  render() {
    return (
      <main>
        <h2> Edit Task </h2> <br />
        <br />
        <Form className="task-form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="editTaskForm.taskTitle">
            <Form.Label> Task Title </Form.Label>
            <Form.Control
              name="taskTitle"
              type="text"
              placeholder="Please Enter a Valid Task Title"
              value={this.state.taskTitle}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="editTaskForm.taskDescription">
            <Form.Label> Task Description </Form.Label>
            <Form.Control
            title="taskDescription"
              as="textarea"
              placeholder="Decription of Task (MAX 200 Characters)"
              value={this.state.taskDescription}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="editTaskForm.taskStatus">
            <Form.Label> Task Status </Form.Label>
            <Form.Control
            name="taskStatus"
              as="select"
              value={this.state.taskStatus}
              onChange={this.handleChange}
            >
              <option> Requested </option> <option> In Progress </option>
              <option> Resolved </option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="editTaskForm.taskDueDate">
            <Form.Label> Due Date </Form.Label>
            <Form.Control
            name="taskDueDate"
              type="text"
              value={this.state.taskDueDate}
              onChange={this.handleChange}
              placeholder="MM/DD/YYYY (e.g. 01/24/1995)"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="editTaskForm.taskRequestedBy">
            <Form.Label> Requested By </Form.Label>
            <Form.Control
            name="taskRequestedBy"
              type="text"
              value={this.state.taskRequestedBy}
              onChange={this.handleChange}
              
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="editTaskForm.taskAssignedTo">
            <Form.Label> Assigned To </Form.Label>
            <Form.Control
            name="taskAssignedTo"
              type="text"
              value={this.state.taskAssignedTo}
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="editTaskForm.taskPriority">
            <Form.Label> Priority </Form.Label>
            <Form.Control
            name="taskPriority"
              as="select"
              value={this.state.taskPriority}
              onChange={this.handleChange}
            >
              <option> Select Priority </option> <option> Urgent </option>
              <option> Regular </option> <option> Not Urgent </option>
            </Form.Control>
          </Form.Group>
          <Link to="/tasks"><Button type="submit"> Edit Task </Button></Link>
          <Link to="/tasks"><Button> Back </Button></Link>
        </Form>
      </main>
    );
  }
}

export default EditTask;

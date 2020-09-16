import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddTask extends Component {
    state = {
        taskTitle: "",
        taskDescription: "",
        taskStatus: "",
        taskDueDate: "",
        taskRequestedBy: "",
        taskAssignedTo: "",
        taskPriority: "",
    };
    handleChange(event) {
        console.log("handleChange");
    }

    render() {
        return ( <
            main >
            <
            h2 > Add Task < /h2> <br / >
            <
            br / >
            <
            Form className = "task-form" >
            <
            Form.Group controlId = "addTaskForm.taskTitle" >
            <
            Form.Label > Task Title < /Form.Label>{" "} <
            Form.Control type = "text"
            placeholder = "Please Enter a Valid Task Title"
            value = { this.state.taskTitle }
            onChange = { this.handleChange }
            />{" "} <
            /Form.Group>{" "} <
            Form.Group controlId = "addTaskForm.taskDescription" >
            <
            Form.Label > Task Description < /Form.Label>{" "} <
            Form.Control as = "textarea"
            placeholder = "Decription of Task (MAX 200 Characters)"
            value = { this.state.taskDescription }
            onChange = { this.handleChange }
            />{" "} <
            /Form.Group>{" "} <
            Form.Group controlId = "addTaskForm.taskStatus"
            hidden >
            <
            Form.Label > Task Status < /Form.Label>{" "} <
            Form.Control as = "select"
            value = { this.state.taskStatus }
            onChange = { this.handleChange } >
            <
            option > Requested < /option> <option> In Progress </option > { " " } <
            option > Resolved < /option>{" "} <
            /Form.Control>{" "} <
            /Form.Group>{" "} <
            Form.Group controlId = "addTaskForm.taskDueDate" >
            <
            Form.Label > Due Date < /Form.Label>{" "} <
            Form.Control type = "text"
            value = { this.state.taskDueDate }
            onChange = { this.handleChange }
            placeholder = "e.g. 12/25/2014 (MM/DD/YYYY)" >
            < /Form.Control>{" "} <
            /Form.Group>{" "} <
            Form.Group controlId = "addTaskForm.taskRequestedBy"
            hidden >
            <
            Form.Label > Requested By < /Form.Label>{" "} <
            Form.Control type = "text"
            value = { this.state.taskRequestedBy }
            onChange = { this.handleChange } >
            < /Form.Control>{" "} <
            /Form.Group>{" "} <
            Form.Group controlId = "addTaskForm.taskAssignedTo"
            hidden >
            <
            Form.Label > Assigned To < /Form.Label>{" "} <
            Form.Control type = "text"
            value = { this.state.taskAssignedTo }
            onChange = { this.handleChange } >
            < /Form.Control>{" "} <
            /Form.Group>{" "} <
            Form.Group controlId = "addTaskForm.taskPriority"
            hidden >
            <
            Form.Label > Priority < /Form.Label>{" "} <
            Form.Control as = "select"
            value = { this.state.taskPriority }
            onChange = { this.handleChange } >
            <
            option > Select Priority < /option> <option> Urgent </option > { " " } <
            option > Regular < /option> <option> Not Urgent </option > { " " } <
            /Form.Control>{" "} <
            /Form.Group>{" "} <
            Button > Add Task < /Button>{" "} <
            /Form>{" "} <
            /main>
        );
    }
}

export default AddTask;
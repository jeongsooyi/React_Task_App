import React, { Component } from "react";

import TodoItem from "./TodoItem";
import { MdAddToPhotos } from "react-icons/md";
import { Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

class TaskContainer extends Component {
  constructor() {
    super();
    this.state = {
      Tasks: [],
      Status: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTasks = prevState.Tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
      return {
        Tasks: updatedTasks,
      };
    });
  }
  
  handleAddClick(id) {
    console.log("Add");
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(this.state)
    }
    fetch('https://localhost:44334/api/tasks/' + id, requestOptions)
      .then(response => response.json())
      .then((response) => {
        const Status = response;
        console.log(Status);
      });
  }

  handleEditClick(id) {
    console.log("Edit");
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify(this.state)
    }
    fetch('https://localhost:44334/api/tasks/' + id, requestOptions)
      .then(response => response.json())
      .then((response) => {
        const Status = response;
        console.log(Status);
      });
  }

  handleDeleteClick(id) {
    console.log("Delete");
    const requestOptions = {
      method: 'DELETE',
      body: JSON.stringify(this.state)
    }
    fetch('https://localhost:44334/api/tasks/' + id, requestOptions)
      .then(response => response.json())
      .then((response) => {
        const Status = response;
        console.log(Status);
      });
  }

  componentDidMount() {
    fetch("https://localhost:44322/api/Tasks/")
      .then((response) => response.json())
      .then((response) => {
        const AllTasks = response;
        this.setState({ Tasks: AllTasks });
      }); 
  }

  render() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          
          {number}
        </Pagination.Item>
      );
    }
    const tasks = this.state.Tasks.map((task) => (
      <TodoItem
        key={task.taskId}
        task={task}
        handleChange={this.handleChange}
        handleEditClick = {this.handleEditClick}
        handleDeleteClick = {this.handleDeleteClick}
      />
    ));
    return (
      <main>
        <Link to="/addTask">
          <MdAddToPhotos className="icons" handleAddClick = {this.handleAddClick} />
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col"> Task Title </th>
              <th scope="col"> Task Status </th>
              <th scope="col"> Task Description </th>
              <th scope="col"> Due Date </th>
              <th scope="col"> Requested By </th>
              <th scope="col"> Assigned To </th> <th scope="col"> Priority </th>
              <th scope="col"> Actions </th>
            </tr>
          </thead>
          {tasks}
        </Table>
        <Pagination> {items} </Pagination> <br />
      </main>
    );
  }
}

export default TaskContainer;

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
            Users: [],
            AssignedTos: [],
            RequestedBys: [],
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
    }
    handleEditClick(id) {
        console.log("Edit");
    }
    handleDeleteClick(id) {
        console.log("Delete");
    }

    componentDidMount() {
        fetch("https://localhost:44322/api/Tasks/")
            .then((response) => response.json())
            .then((response) => {
                const AllTasks = response;
                this.setState({ Tasks: AllTasks });
            });
        fetch("https://localhost:44322/api/RequestedBies/")
            .then((response) => response.json())
            .then((response) => {
                const AllRequestedBys = response;
                this.setState({ RequestedBys: AllRequestedBys });
            });
        fetch("https://localhost:44322/api/AssignedToes/")
            .then((response) => response.json())
            .then((response) => {
                const AllAssignedTos = response;
                this.setState({ AssignedTos: AllAssignedTos });
            });
        fetch("https://localhost:44322/api/Users/")
            .then((response) => response.json())
            .then((response) => {
                const AllUsers = response;
                this.setState({ Users: AllUsers });
            });
    }

    render() {
        let active = 1;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push( <
                Pagination.Item key = { number }
                active = { number === active } > { " " } { number } { " " } <
                /Pagination.Item>
            );
        }
        const tasks = this.state.Tasks.map((task) => ( <
            TodoItem key = { task.taskId }
            task = { task }
            handleChange = { this.handleChange }
            />
        ));
        return ( <
            main >
            <
            Link to = "/addTask" >
            <
            MdAddToPhotos className = "icons"
            onClick = { this.handleAddClick }
            />{" "} <
            /Link>{" "} <
            Table striped bordered hover >
            <
            thead >
            <
            tr >
            <
            th scope = "col" > Task Title < /th>{" "} <
            th scope = "col" > Task Status < /th>{" "} <
            th scope = "col" > Task Description < /th>{" "} <
            th scope = "col" > Due Date < /th>{" "} <
            th scope = "col" > Requested By < /th>{" "} <
            th scope = "col" > Assigned To < /th> <th scope="col"> Priority </th > { " " } <
            th scope = "col" > Actions < /th>{" "} <
            /tr>{" "} <
            /thead>{" "} { tasks } { " " } <
            /Table>{" "} <
            Pagination > { items } < /Pagination> <br / >
            <
            /main>
        );
    }
}

export default TaskContainer;
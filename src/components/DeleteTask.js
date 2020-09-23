import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

function DeleteTask(props) {
    return (
        <div>
            <h1>Are you sure to delete this task?</h1>
            <Link to="/tasks">
                <Button onClick= {props.handleDeleteClick}> YES </Button>
            </Link>
            <Link to="/tasks">
                <Button> NO </Button>
            </Link>
            
        </div>
    )
}

export default DeleteTask

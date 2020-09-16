import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function TodoItem(props) {
    const editLink = "/editTask/" + props.task.taskId;
    const deleteLink = "/deleteTask/" + props.task.taskId;
    return ( <
        tbody >
        <
        tr > { " " } <
        td > { props.task.taskTitle } < /td> <td> {props.task.taskStatus} </td >
        <
        td > { props.task.taskDescription } < /td>{" "} <
        td > { props.task.taskDueDate } < /td> <td> Requestor </td > { " " } <
        td > Assignee < /td> <td> {props.task.taskPriority} </td > { " " } <
        td >
        <
        Link to = { editLink } >
        <
        FaRegEdit className = "icons"
        onClick = { props.task.handleEditClick }
        />{" "} <
        /Link>{" "} <
        Link to = { deleteLink } >
        <
        MdDelete className = "icons"
        onClick = { props.task.handleDeleteClick }
        />{" "} <
        /Link>{" "} <
        /td>{" "} <
        /tr>{" "} <
        /tbody>
    );
}

export default TodoItem;
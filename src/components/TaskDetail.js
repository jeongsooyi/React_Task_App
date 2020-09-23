import React from "react";
import { Table } from "react-bootstrap";
import { AddComment } from "./AddComment";

function TaskDetail(props) {
  //const taskLink = "https://localhost:44322/api/Tasks/" + props.task.taskId;
  //const commentLink = = "https://localhost:44322/api/Comments/";
    const comments = "PlaceHolder for comments" ; // Placeholder Variable
  return (
    <main>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col"> Task Title </th>
            <th scope="col"> Task Status </th>
            <th scope="col"> Task Description </th>
            <th scope="col"> Due Date </th>
            <th scope="col"> Requested By </th>
            <th scope="col"> Assigned To </th>
            <th scope="col"> Priority </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
      </Table>
      <Table>
          <thead>
              <tr>
                  <th scope="col"> Comments </th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>{comments}</td></tr>
          </tbody>
      </Table>
      <AddComment />
    </main>
  );
}

export default TaskDetail;

import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export class AddComment extends Component {
    constructor(){
        super()
        this.state = {
            commentTitle: "",
            comment: ""
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
        console.log("Submit Comment")
        //TODO: POST Call
    }

    render() {
        return (
            <main>
                <Form className = "comment-form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId = "addComment.commentTitle">
                        <Form.Label> Title </Form.Label>
                        <Form.Control
                            name='commentTitle'
                            type="text"
                            placeholder = "Title of Comment"
                            value = {this.state.commentTitle}
                            onChange = {this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId = "addComment.comment">
                        <Form.Control
                            name='comment'
                            as="textarea"
                            placeholder = "Please Enter Comment..."
                            value = {this.state.comment}
                            onChange = {this.handleChange}
                        />
                    </Form.Group>
                    <Button> Post Comment </Button>
                </Form>
            </main>
        )
    }
}

export default AddComment

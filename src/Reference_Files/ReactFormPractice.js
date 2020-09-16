import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "male",
            destination: "",
            isLactoseIntolerant: false,
            isVegetarian: false,
            isKosher: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert("First Name: " + "" + "Last Name: " + "");
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ?
            this.setState({
                [name]: checked,
            }) :
            this.setState({
                [name]: value,
            });
    }

    render() {
        return ( <
            main >
            <
            form onSubmit = { this.handleSubmit } >
            <
            input name = "firstName"
            placeholder = "First Name"
            value = { this.state.firstName }
            onChange = { this.handleChange }
            />{" "} <
            br / >
            <
            input name = "lastName"
            placeholder = "Last Name"
            value = { this.state.lastName }
            onChange = { this.handleChange }
            />{" "} <
            br / >
            <
            input name = "age"
            placeholder = "Age"
            value = { this.state.age }
            onChange = { this.handleChange }
            />{" "} <
            br / >
            <
            br / >
            <
            label >
            <
            input type = "radio"
            name = "gender"
            value = "male"
            checked = { this.state.gender === "male" }
            onChange = { this.handleChange }
            />{" "}
            Male { " " } <
            /label>{" "} <
            br / >
            <
            label >
            <
            input type = "radio"
            name = "gender"
            value = "female"
            checked = { this.state.gender === "female" }
            onChange = { this.handleChange }
            />{" "}
            Female { " " } <
            /label>{" "} <
            br / >
            <
            br / >
            <
            label > Destination: < /label>{" "} <
            select value = { this.state.destination }
            onChange = { this.handleChange }
            name = "destination" >
            <
            option
            default value = "None" >
            Select { " " } <
            /option>{" "} <
            option value = "Seoul" > Seoul < /option>{" "} <
            option value = "London" > London < /option>{" "} <
            option value = "Paris" > Paris < /option>{" "} <
            option value = "New York City" > New York City < /option>{" "} <
            option value = "Los Angeles" > Los Angeles < /option>{" "} <
            /select>{" "} <
            br / >
            <
            br / >
            <
            label > { " " }
            Any Dietary Restrictions ?
            <
            br / >
            <
            input type = "checkbox"
            name = "isLactoseIntolerant"
            checked = { this.state.isLactoseIntolerant }
            onChange = { this.handleChange }
            />{" "}
            Lactose Intolerant < br / >
            <
            input type = "checkbox"
            name = "isVegetarian"
            checked = { this.state.isVegetarian }
            onChange = { this.handleChange }
            />{" "}
            Vegetarian < br / >
            <
            input type = "checkbox"
            name = "isKosher"
            checked = { this.state.isKosher }
            onChange = { this.handleChange }
            />{" "}
            Kosher < br / >
            <
            /label>{" "} <
            br / >
            <
            button > Submit < /button>{" "} <
            /form>{" "} <
            hr / >
            <
            h2 > Entered information : < /h2>{" "} <
            p > Your name: { this.state.firstName + " " + this.state.lastName } < /p>{" "} <
            p > Your age: { this.state.age } < /p>{" "} <
            p > Your gender: { this.state.gender } < /p>{" "} <
            p > Your destination: { this.state.destination } < /p>{" "} <
            p >
            Your dietary restrictions: { this.state.isKosher ? " Kosher," : "" } { " " } { this.state.isLactoseIntolerant ? " Lactose Intolerant," : "" } { " " } { this.state.isVegetarian ? " Vegetarian" : "" } { " " } <
            /p>{" "} <
            /main>
        );
    }
}

// export default App;
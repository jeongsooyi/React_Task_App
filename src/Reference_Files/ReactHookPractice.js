import React, { useState } from "react";

function App() {
    const [answer] = useState("Yes");

    return ( <
        div >
        <
        h1 > Is state important to know ? { answer } < /h1>{" "} <
        /div>
    );
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App;

import React, { useState } from "react";

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App() {
    const [count, setCount] = useState(0);
    const [answer, setAnswer] = useState("Yes");

    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
        setCount((prevCount) => prevCount - 1);
    }

    return ( <
        div >
        <
        h1 > { count } < /h1> <button onClick={increment}> Increment </button > { " " } <
        button onClick = { decrement } > Decrement < /button>{" "} <
        /div>
    );
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

export default App;

import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            // setCount(prevCount => prevCount + 1)
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setColor(randomcolor());
    }, [count]);

    return ( <
        div >
        <
        h1 style = {
            { color: color } } > { count } < /h1> <
        /div>
    );
}

export default App;
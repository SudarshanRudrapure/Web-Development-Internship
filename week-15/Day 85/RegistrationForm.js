import { useState } from "react";

function App(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event){

        event.preventDefault();

        alert(
            "Name: " + name +
            "\nEmail: " + email
        );

    }

    return(

        <form onSubmit={handleSubmit}>

            <h1>Registration Form</h1>

            <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <button type="submit">
                Register
            </button>

        </form>

    );

}

export default App;

/*
Output

User enters:

Name
Email

On clicking Register:
Popup displays entered data.
*/
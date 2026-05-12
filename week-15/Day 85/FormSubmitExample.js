import { useState } from "react";

function App(){

    const [username, setUsername] = useState("");

    function handleSubmit(event){

        event.preventDefault();

        alert(username);

    }

    return(

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
            />

            <button type="submit">
                Submit
            </button>

        </form>

    );

}

export default App;
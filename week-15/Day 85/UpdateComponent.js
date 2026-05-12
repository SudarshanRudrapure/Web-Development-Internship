// Example: Changing Text

import { useState } from "react";

function App(){

    const [message, setMessage] = useState("Hello");

    return(

        <div>

            <h1>{message}</h1>

            <button onClick={() => setMessage("Welcome to React")}>
                Change Text
            </button>
        </div>
    );
}
export default App;
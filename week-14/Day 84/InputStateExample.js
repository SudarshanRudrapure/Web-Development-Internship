import { useState } from "react";

function App(){

    const [name, setName] = useState("");

    return(

        <div>

            <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            />

            <h2>Hello {name}</h2>

        </div>

    );

}

export default App;


/* 
Output:
Typing inside input updates UI immediately.
*/
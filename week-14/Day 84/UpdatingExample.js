/* 
Updating Phase

Updating occurs when:

State changes
or
Props change

Component re-renders automatically.
*/


import { useState, useEffect } from "react";

function App(){

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("Component Updated");

    }, [count]);

    return(

        <div>

            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

        </div>
    );
}
export default App;


/*
Output

Every time count changes:

Component Updated

appears in console.
*/
/*
Stateful Components
Stateful components are components that use state.

These components can:

Change data
Handle interactions
Update UI dynamically

*/

import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);

    return(

        <div>

            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Add
            </button>
        </div>
    );
}

export default Counter;
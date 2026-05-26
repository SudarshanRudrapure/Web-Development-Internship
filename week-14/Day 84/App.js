import { useState } from "react";

function App(){
    const [count, setCount] = useState(0);
    return(

        <div>

            <h1>Count : {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

        </div>
    );
}
export default App;


/*
Count : 0

[Increase Button]

When button is clicked:
Count increases automatically.
*/

/*
Explanation
const [count, setCount] = useState(0);
count → current state value
setCount → updates state
0 → initial value
*/
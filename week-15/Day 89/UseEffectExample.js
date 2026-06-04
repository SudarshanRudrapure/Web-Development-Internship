import { useState, useEffect } from "react";

function UseEffectExample(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Rendered");
    }, [count]);

    return(
        <div>
            <h1>useEffect Example</h1>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}
export default UseEffectExample;
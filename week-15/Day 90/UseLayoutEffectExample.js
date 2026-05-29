import { useState, useLayoutEffect } from "react";

function UseLayoutEffectExample(){

    const [count, setCount] = useState(0);

    useLayoutEffect(() => {

        console.log("useLayoutEffect Executed");

    }, [count]);

    return(

        <div>
            <h1>useLayoutEffect Example</h1>
            <h2>Count : {count}</h2>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>
        </div>

    );

}

export default UseLayoutEffectExample;
import { useState, useCallback } from "react";

function UseCallbackExample(){

    const [count, setCount] = useState(0);

    const showMessage = useCallback(() => {

        console.log("Button Clicked");

    }, []);

    return(

        <div>
            <h1>useCallback Example</h1>
            <h2>Count : {count}</h2>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>
            <button onClick={showMessage}>
                Show Message
            </button>

        </div>

    );

}

export default UseCallbackExample;
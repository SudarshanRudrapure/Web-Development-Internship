//useRef allows direct access to DOM elements.

import { useRef } from "react";

function App(){

    const inputRef = useRef();

    function showValue(){

        alert(inputRef.current.value);

    }

    return(

        <div>

            <input
                type="text"
                ref={inputRef}
            />

            <button onClick={showValue}>
                Show Value
            </button>

        </div>

    );

}

export default App;

/*
Output

Button click shows entered input value.
*/

/*
| Controlled          | Uncontrolled      |
| ------------------- | ----------------- |
| Uses state          | Uses refs         |
| React controls data | DOM controls data |
| Easier validation   | Less React code   |
*/
import { useRef } from "react";

function UseRefExample(){

    const inputRef = useRef();
    function focusInput(){
        inputRef.current.focus();
    }

    return(
        <div>
            <h1>useRef Example</h1>
            <input
                type="text"
                ref={inputRef}
                placeholder="Enter Name"
            />
            <button onClick={focusInput}>
                Focus Input
            </button>
        </div>
    );
}
export default UseRefExample;
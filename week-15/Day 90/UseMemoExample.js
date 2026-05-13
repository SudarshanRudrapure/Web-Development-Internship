import { useState, useMemo } from "react";

function UseMemoExample(){

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);

    const squareNumber = useMemo(() => {

        console.log("Calculating...");

        return number * number;

    }, [number]);

    return(

        <div>

            <h1>useMemo Example</h1>

            <h2>Square : {squareNumber}</h2>

            <button
                onClick={() => setCount(count + 1)}
            >
                Count : {count}
            </button>

            <button
                onClick={() => setNumber(number + 1)}
            >
                Change Number
            </button>

        </div>

    );

}

export default UseMemoExample;
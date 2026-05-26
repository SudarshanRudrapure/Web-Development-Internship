import { useEffect } from "react";

function App(){

    useEffect(() => {
        console.log("Component Mounted");

    }, []);

    return <h1>Mounting Example</h1>;
}

export default App;

/*
Output
Component Mounted
*/
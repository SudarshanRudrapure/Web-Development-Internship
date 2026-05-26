/*
Unmounting Phase

Unmounting means:
Component is removed from DOM.
*/


import { useEffect } from "react";
function App(){

    useEffect(() => {

        return () => {
            console.log("Component Unmounted");
        };
    }, []);
    return <h1>Unmounting Example</h1>;
}
export default App;

/*
Output

When component is removed:

Component Unmounted

appears in console.
*/
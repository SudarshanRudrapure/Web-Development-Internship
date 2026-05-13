import { createContext, useContext } from "react";

const UserContext = createContext();

function ChildComponent(){

    const user = useContext(UserContext);

    return(

        <h2>Welcome {user}</h2>

    );

}

function UseContextExample(){

    return(

        <UserContext.Provider value="Sudarshan">

            <div>

                <h1>useContext Example</h1>

                <ChildComponent />

            </div>

        </UserContext.Provider>

    );

}

export default UseContextExample;
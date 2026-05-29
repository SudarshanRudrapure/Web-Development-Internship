import Home from "./Home";
import withMessage from "./withMessage";

const EnhancedHome = withMessage(Home);

function App(){

    return(
        <EnhancedHome />
    );
}

export default App;

/*
Explanation

HOC adds extra functionality to component.
*/
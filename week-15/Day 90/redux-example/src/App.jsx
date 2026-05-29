import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import {
    increment,
    decrement
} from "./features/counterSlice";

function App(){
    const count =
        useSelector((state) => state.counter.value);

    const dispatch = useDispatch();
    return(

        <div className="counter-container">
            <h1>Redux Counter App</h1>
            <div className="counter-value">
                {count}
            </div>

            <div className="button-group">

                <button
                    className="increment-btn"
                    onClick={() => dispatch(increment())}
                >
                    Increase
                </button>

                <button
                    className="decrement-btn"
                    onClick={() => dispatch(decrement())}
                >
                    Decrease
                </button>

            </div>

        </div>

    );

}

export default App;
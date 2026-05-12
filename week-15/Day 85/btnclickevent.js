function App(){

    function showMessage(){

        alert("Button Clicked");

    }

    return(

        <button onClick={showMessage}>
            Click Here
        </button>
    );
}
export default App;

/*
Output

When button is clicked:
Popup message appears.
*/

/*
Defining Event Handlers for User Actions

Event handlers respond to user interactions.

Examples:

Clicking buttons
Typing input
Submitting forms
*/
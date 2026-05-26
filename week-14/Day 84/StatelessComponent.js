/*
Stateless Components

Stateless components do not manage state.

They only display data using props.
*/

function Welcome(props){
    return(

        <h1>Welcome {props.name}</h1>
    );
}
export default Welcome;
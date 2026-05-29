/*
Higher-Order Components (HOC)

A Higher-Order Component is:
A function that takes component and returns enhanced component.

Used for:
Code reuse
Shared functionality
Reusable logic
Why Use HOC?

Avoid repeating same code in multiple components.

Syntax
const EnhancedComponent = higherOrderComponent(OriginalComponent);
*/



function withMessage(WrappedComponent){

    return function(){

        return(
            <div>
                <h1>Welcome User</h1>
                <WrappedComponent />
            </div>

        );
    };
}
export default withMessage;
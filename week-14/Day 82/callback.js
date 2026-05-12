// Callback Functions
// A callback function is passed as argument to another function.

// Example

function greet(name, callback){

    console.log("Hello " + name);

    callback();

}

function done(){

    console.log("Callback Executed");

}

greet("Sudarshan", done);

/*
Output
Hello Sudarshan
Callback Executed
*/
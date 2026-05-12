/*
Promises in JavaScript

Promises handle asynchronous operations better.

Promise has 3 states:

Pending
Resolved
Rejected
*/


let promise = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Operation Successful");
    }
    else{
        reject("Operation Failed");
    }

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));

/*
Output
Operation Successful
*/
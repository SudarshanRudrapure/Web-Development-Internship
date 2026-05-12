
/*
Async and Await
async and await simplify promise handling.
async Function
An async function always returns promise.

await Keyword
await waits for promise result.
*/

function fetchData(){

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Data Received");

        }, 2000);

    });

}

async function getData(){

    let result = await fetchData();

    console.log(result);

}

getData();

/*
Output
Data Received
*/
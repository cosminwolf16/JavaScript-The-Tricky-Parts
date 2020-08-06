async function sendRequest() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {})
        console.log("Got response");
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }

// .then((response) => {
//     console.log("First then");
//     return response.json();
// })
// .catch((err) => {
//     console.log("Failed")
// })
// .then(function(data) {
//     console.log(data)

}
sendRequest();
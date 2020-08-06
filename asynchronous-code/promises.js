const myPromise = new Promise(function(resolve,reject) {
    setTimeout(function() {
    resolve("It worked")
    }, 2000);
});

myPromise.then(function(successString) {
console.log(successString)
return 123
}).then(function (data) {
console.log(data)

}).then(function(data) {
    console.log("THird block");
    console.log(data)
})

fetch("https://jsonplaceholder.typicode.com/todos/1", {})
.then(function(response) {
return response.json();
}).then(function(data) {
    console.log(data)
});



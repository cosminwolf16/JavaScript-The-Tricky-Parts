function createGreeter(myName) {
    return function() {
        console.log(myName);
        setTimeout(function() {
            console.log(myName)
        }, 1000)

        myName = "Will"
    }
}

const greetCosmin = createGreeter("Cosmin");
greetCosmin();


function createGreeter(myName) {
    return function() {
        console.log(myName);
        setTimeout(function() {
            console.log(myName)
        }, 1000)

        myName = "Smokyn"
    }
}

const greetCosmin = createGreeter("Cosmin");
const greetSmokyn = createGreeter("Smokyn");
greetCosmin();
// greetSmokyn();

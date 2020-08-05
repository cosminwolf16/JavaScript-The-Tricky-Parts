function createGreeter(myName) {
    return function() {
        console.log(myName);
    }
}

const greetCosmin = createGreeter("Cosmin");
const greetSmokyn = createGreeter("Smokyn");
greetCosmin();
// greetSmokyn();

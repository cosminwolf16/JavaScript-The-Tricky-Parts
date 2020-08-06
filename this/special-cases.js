// special case number 1

class Person {
    constructor() {
        this.age = 31;
    }
    greet() {
    console.log("My age: " + this.age);
    }

    greetWithDelay() {
        setTimeout(function() {
            console.log("My age: " + this.age)
        }, 1500)

    }
}

const cosmin = new Person();
cosmin.greet();
cosmin.greetWithDelay();

const btn = document.querySelector("button");


btn.addEventListener("click", function() {
    console.log(this);
})
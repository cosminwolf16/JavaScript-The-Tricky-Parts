this.age = 31;

function greet() {
    console.log("I am " + this.age + " years old.")
}

const person = {
    age: 21,
    greetMe: greet
}

person.greetMe();

// "use strict";

// console.log(this) // window

// greet();

// function greet() {
//     console.log(this) // undefined in strict mode
// }
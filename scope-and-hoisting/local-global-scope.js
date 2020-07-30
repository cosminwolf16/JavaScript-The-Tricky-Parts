var myAge = 21; // global scope

function greet() {
  function printInfo() {
    console.log('Hello ' + myName);
    console.log('I am ' + myAge + ' years old');
  }
  var myName = 'Cosmin'; // Local Scope (Function Scope)
  printInfo();
}

greet();
console.log(myName);

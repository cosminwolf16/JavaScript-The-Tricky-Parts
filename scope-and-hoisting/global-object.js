let myName = 'Cosmin';

let printAge = function () {
  console.log('I am 31 years old');
};

printAge();

console.log(myName);
console.log(this.myName);
console.log(self.myName);
this.printAge();
self.printAge();

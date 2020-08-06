const person = {
  name: 'Cosmin',
  age: 21,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

person.greet();
console.log(person);

function Employee(name, id) {
  this.name = name;
  this.id = id;
}

const employee1 = new Employee('Cosmin', 'e1');
const employee2 = new Employee('Will', 'e2');

console.log(employee1);
console.log(employee2);

const a = new Object(); // {}
console.log(a);

const arr = new Array(); // []
console.log(arr);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi ' + this.name);
  }
}

const p1 = new Person('Cosmin', 21);
console.log(p1);
p1.greet();

const companyPerson = {
  greet() {
    console.log('Hi ' + this.name);
  },
};

function Employee(name, internalId) {
  this.name = name;
  this.id = internalId;
}

Employee.prototype = companyPerson;
// console.log(Employee.__proto__);
// console.log(Employee.prototype);

const emp1 = new Employee('Cosmin', 'e1');
emp1.greet();

Employee.prototype.sayGoodbye = function () {
  console.log('Bye');
};

Employee.prototype = {};

emp1.sayGoodbye();

class Human {
  wave() {
    console.log('Waving...');
  }
}

class Person extends Human {
  constructor(name) {
    super();
    this.name = name;
  }
}

const p1 = new Person('Cosmin');
console.log(p1);
console.log(p1.wave());
console.log(p1);

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

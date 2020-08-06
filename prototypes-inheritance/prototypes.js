const numbers = [1, 2, 3]; // new Array() called and constructs the object and has a length property etc
const doubledNumbers = numbers.map((number) => number * 2);

// console.log(numbers);

const companyMember = {
  company: 'Blue Wire Software',
  greet() {
    console.log('Hi!');
  },
};

const employee = {
  name: 'Cosmin',
  age: 21,
};

const boss = {
  name: 'Levi',
  age: 32,
  title: 'Technical Lead',
};

Object.setPrototypeOf(employee, companyMember);
Object.setPrototypeOf(boss, companyMember);

// employee.__proto__ = companyMember;
// boss.__proto__ = companyMember;

boss.greet();
employee.greet();
console.log(boss.company);
console.log(companyMember.__proto__);
console.log(companyMember.__proto__.__proto__);

const employeeAlt = Object.create(companyMember);
employeeAlt.name = 'Cosmin';
employeeAlt.age = 21;
employeeAlt.greet();
console.log(employeeAlt);

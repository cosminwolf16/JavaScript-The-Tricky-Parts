const hobbies = ['Sports', 'Cooking'];
// const todos = hobbies.slice();
const todos = [...hobbies];

hobbies.push('Eating');
console.log(todos);

const user = { age: 31 };
// const student = Object.assign({}, user);
const student = { ...user };

user.age = 32;
console.log(student);

const users = [{ name: 'Cosmin' }, { name: 'George' }];
const students = users.map((user) => {
  return { ...user };
});

users.push({ name: 'Federico' });
users[0].name = 'Smokyn';
console.log(students);

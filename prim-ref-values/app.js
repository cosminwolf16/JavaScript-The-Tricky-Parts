let a = 5;

// console.log(a + 1);
// console.log(a);

let b = a; // a new 5 was created here
a = a + 2;
// console.log(a); // 7
// console.log(b); // 5

let user = { age: 31 };
let student = user;
user.age = 32;
console.log(student);

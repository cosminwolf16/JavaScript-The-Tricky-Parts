const hobbies = ['Sports', 'Cooking'];
// const todos = ['Sports', 'Cooking'];
const todos = hobbies; // the same POINTER

const user = { age: 21 };
const student = { age: 21 };

console.log(hobbies == todos); // 5 == "5" => true
console.log(hobbies === todos); // 5 === "5" => false
console.log(user == student);
console.log(user === student);

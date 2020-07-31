for (let i = 0; i < 5; i++) {
  console.log(i);
}

const users = {
  name: 'Cosmin',
  age: 31,
  greet() {
    console.log('Hello');
  },
};

users.__proto__.test = 5;

for (const key in users) {
  if (users.hasOwnProperty(key)) {
    console.log(key);
    console.log(users[key]);
  }
}

// for (const val of Object.values(users)) {
//   console.log(val);
// }

const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num);
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(i);
//   console.log(numbers[i]);
// }

numbers.forEach(function (num, index) {
  console.log(num);
  console.log('Index ' + index);
});

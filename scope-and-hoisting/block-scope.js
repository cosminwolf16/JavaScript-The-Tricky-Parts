const myName = 'Smokyn'; // block scope. similar to global scope

if (true) {
  //   var myAge = 31; // global scope
  let myAge = 31; // block scope

  console.log(myAge);
  console.log(myName);
}

{
  // this is a block scope
  const myName = 'Cosmin'; // block scope
}
// console.log(myAge);
// console.log(myAge);

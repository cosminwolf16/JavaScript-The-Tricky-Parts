function factorial(n) {
  console.log('Calling factorial');
  console.log('n ' + n);
  return n === 1 ? true : n * factorial(n - 1);

  //   if (n === 1) {
  //     return true;
  //   }
  //   return n * factorial(n - 1);
}
console.log(factorial(3));

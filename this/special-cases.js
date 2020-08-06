class Person {
  constructor() {
    this.age = 31;
  }
  greet() {
    console.log('My age: ' + this.age);
  }

  greetWithDelay() {
    const that = this;
    // setTimeout(function () {
    //   console.log(this);
    //   console.log('My age: ' + this.age);
    // }, 1500);

    setTimeout(() => {
      console.log(this);
      console.log('My age: ' + this.age);
    }, 1500);
  }
}

const cosmin = new Person();
cosmin.greet();
cosmin.greetWithDelay();

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  console.log(this);
});

// function sayHello() {
//   return 'Hello World!';
// }

// console.log(sayHello());
//
// function sayHello(name = 'World') {
//   return `Hello ${name}!`;
// }
// //named function and requires a name to be passed
// console.log(sayHello()); // this would show Hello World
// console.log(sayHello("Alan"));// this would show Hello Alan


// function sayHelloWithDefaultArg(name = 'World') {
//   return `Hello ${name}!`;
// }
// // //name = 'World' is the default function. if no name is passed, 'World' will be used
// console.log(sayHelloWithDefaultArg());


// var add = function (firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }
//
// console.log(add(2,3)); //this will return 5
// // annonymous function as add is not named


// Two types of functions;
//
// Named functions
//
// Anonymous:-
// 1. ‘function’ key word functions
// 2. arrow functions ‘=>’



// var multiply = (firstNumber, secondNumber) => {
//   return firstNumber * secondNumber;
// }
// console.log(multiply(3,4));
// // => always means a function in JS and can replace function as above



// var divideByFive = a => a / 5;
// parameter => function
// if more than 1 parameter then brackets() must be used
// return does not need to be used here as only 1 expression on 1 line











// Declare a named function that takes an array of numbers,
// and returns the sum, or total, of all of the numbers in the array.
//
// var numArray = [67, 03, 30];
//
// function sumOfNumbers (numbers) {
//   var sum =0;
//   var numbers = numArray
//   for (numbers of numArray) {
//     total += numArray
//   }
//   return total
// }

function arraySum(array) {
  var total = 0;
  for (var number of array) {
    total += number;
  }
  return total
}
console.log('Total is:', total);


// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object
// and false if the object does not have a key that matches the string.
// Store this function in an appropriately named variable to invoke it.

var objectHasKey = function (object, searchString) {
  var result = false;
  for (var key in object) {
    if (searchString === key) {
      result = true;
      break;
    }
  }
  return result;
  // return object.hasOwnProperty(searchString);
  // this removes the need for the forin loop.
}


// SCOPE
// if we log a function outside the {} (aka block) we will get
//  'not defined' unless we use var.
// let and const can replace var.
// let and const must be logged within the block {}
// const cannot be reassigned but can be used to modify an array.
// Basically if we use an = with const it will error as
// = reassigns the function.

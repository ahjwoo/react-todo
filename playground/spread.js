// function add (a, b) {
//   return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5];
// console.log(add(...toAdd))


// var groupA = ['Chloe', 'Matt'];
// var groupB = ['Vikram', 'Andrew'];
// var final = [3,...groupA, groupB];

// console.log(final);

var person = ['Andrew', 26];
var person2 = ['Jack', 19];

function greeting(name, age) {
  console.log("Hi " + name + ", you are " + age);
}
greeting(...person);
greeting(...person2);




var names = ['Mike', 'Ben'];
var final = [...names, 'Andrew'];

final.forEach(function(name){
  console.log("Hi " + name);
})
// var obj = {a: 1};
//
// var increment = function(obj ) { obj.a= 2;}
//
// increment(obj);
//
// console.log(obj.a);
//
// // +
//
// // number
// // string
// // boolean -> true/false
// // undefined
// // null
//
// //objects
//
//
//
// if (5){
//   console.log('true');
// } else {
//   console.log('false');
// }
//
// function calculate(a) {
//   console.log('a', a);
//   var b = a || false;
//   console.log(b);
// }
//
// calculate();
//
// var num = 123;
//
// var obj = {
//   test: 123
// };
//
// function updateObj(a) {
//   a.test = 5;
// }
//
// function updateNum(a) {
//   a = 5;
// }
//
// updateObj(obj);
// updateNum(num);
//
// console.log('number =', num);
// console.log('object =', obj);
//
//
// var dog = {
//   name: 'Jim',
//   age: 3,
//   bones: 50,
//   woof: function () {
//     console.log('this ->', this);
//   },
//   eat: function () {
//     this.bones--; // тоже самое что и dog.bones - 1;
//   }
// }
//
// dog.eat();
// dog.eat();
// dog.eat();
//
// dog.woof();

// this - контекст исполнения

var aString = {
  value: 'Im a string!!!'
};

console.log(typeof aString);

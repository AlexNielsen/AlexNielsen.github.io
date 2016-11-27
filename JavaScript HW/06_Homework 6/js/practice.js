//Часть 3 (Call/Apply)
// calculate.call(context, arg1, arg2, ...);

function calculateMoney(a, b) {
console.log("I am " + this.firstName + " " + this.lastName + " I have " + (a + b) + " dollars");
}

var context = {
  firstName: 'Vasya',
  lastName: 'Pupkin'
};

calculateMoney.call(context, 5, 3);
calculateMoney.apply(context, [5, 3]);

function printArguments() {
  var args = [].slice.call(arguments);
  args.push('test');

  console.log(args);
}

printArguments(1, 2, 3);

//Часть 2

var a = {}; //литерал объекта
var b = []; //литерал массива

var c = new Object();
var d = new Array(1, 2, 3, 'test');
var str = new String ('test');


function Animal(newName, newColor) {
  var self = this;
  var abc = 'internal variable';

  console.log("New animal was created!");
  alert('animal!');

  newName = newName.toUpperCase();

  self.name = newName;
  self.color = newColor;

  self.noise = function () {
    console.log('this is public method');
    self._noise();
  }

  self._noise = function () {
    alert("Bark, I am, " + self.name);
  }

}

var dog = new Animal('Jack', 'white');

console.log(dog.name);

dog.noise();



//Часть 1

var counter = 0;

var someFunction = function () {
  console.log('It is alive, counter = ', counter);
  counter++;
  if (counter === 5){
  clearInterval(timerId);
  }
}

//интервал
var timerId = setInterval(someFunction, 2000);

//отложенный старт
// var timerId = setTimeout(someFunction, 5000);

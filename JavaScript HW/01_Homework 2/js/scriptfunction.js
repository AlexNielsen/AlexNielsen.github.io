function sayHi() {
  alert('hello world!');
}

sayHi();

console.log(sayHi);

function calculate(a, b) {
  var test = 'test';
  console.log('arguments.length =', arguments[2].length);
  console.log('calculate result = ', a + b + test);
}

calculate(2, 5, 3);

function calculate(a, b, c) {
  var test = 'test';
  var result;

  result = a + b + c;

if (result >= 10){
  return result;
} else {
  return 'bad parameters';
}

  return result; //прекращает выполнение функции и возвращает сумму
}

var calculateResult = calculate(2, 5, 3);
console.log('calculateResult', calculateResult);

var str = 'string';

str[0] = 'S';

console.log(str);

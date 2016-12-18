//Анонимная функция
var element = document.getElementById('text');

element.addEventListener('click', function() {
  alert('test');
});

//new function

var doubleDouble = new Function('a', 'console.log(a*2)');

doubleDouble(8);

//function expretion
var double = function (a) {
  console.log(a*2);
}

double(4)

//function declaration - имеет преимущество перед другими функциями

function triple(a) {
  console.log(a*3);
}

var userFunction;

if (+prompt('Введите число')) {
  userFunction = function () {
    alert(1);
  }
} else {
  userFunction = function () {
    alert(0);
  }
}

userFunction();

triple(4);

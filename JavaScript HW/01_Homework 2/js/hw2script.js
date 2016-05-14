
function involution(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
  result *= x;
  }

  return result;
}

var x = prompt('Введите желаемое число','');

var n = prompt('Введите желаемую степень','');

if (n <= 1) {
  alert('Не ломай мою функцию, введи нормальную степень!');
} else {
  console.log( involution(x, n) );
}

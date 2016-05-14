var str = 'TEST';

console.log(str.length);

console.log(str[0]);

console.log(str.indexOf('st'));

str = str.replace('e', 'A');

str = str.toLowerCase();

console.log(str);

var str = '12';
//var num = +str;
var num = parseInt(str);

var newStr = num + '';

console.log('newStr', newStr);
console.log(typeof newStr);

console.log(str);
console.log(num);

var flag = isNaN(num);

console.log(flag);

var newNymber = 12.4;

var roundResult = Math.round(newNymber); //округление round (правильное округление) ceil (округление только в большую сторону) , floor (убирает доли)

console.log(roundResult);

var str = '1,2,test,4';

var arr = str.split(','); //разделяет по параметру на ячейки массива. В данном случае по запятой.

console.log(arr);

var arr = [1, 2, 3, 4, 'test'];

var str = arr.join(' : '); // обїединили массив в строку, через символ :

console.log(str);

var arr = [1, 3, 5, 2, 1.1, 8];

var newArr = arr.sort(); // сортировка беспорядочного массива

//var newArr = arr.sort(function (a, b) {
//
//});

console.log(newArr);

var arr = [1, 3, 5, 2, 1.1, 8];

arr.push('test string'); // добавляет элемент в массив

arr.pop(); // убирает элемент из массива, последний.

console.log(arr);

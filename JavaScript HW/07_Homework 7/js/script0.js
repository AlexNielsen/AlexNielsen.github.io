var a = 10;


function calculateLength(r) {
  // length = 2 * Pi * r;

  //Lexical Enviroment = {PI: 3.14, length: undefined, r:...} - хранятся локальные переменные.
  var PI = 3.14;
  var length = 2 * PI * r;
  console.log(length * a);

  function showMessage() {
    console.log('Hello ' + a);
  }

  showMessage();
}

calculateLength(5);


//Замыкание

function createCounter() {
  var count = 1;

  return function () {
    return count++;
  }
}

var newCounter = createCounter();

console.log(newCounter);

var result = newCounter();
console.log(result);


//Анонимная функция - Immediatelly invoked function expression

var shop = (function() {

 var appleAmount = 100;

function getTotalApplesAmount() {
  return appleAmount;
}

 function sellApples(amount) {
   appleAmount = appleAmount - amount;
 }
 function buyApples(amount) {
   appleAmount = appleAmount + amount;
 }

 function setApples(n) {
   appleAmount = n;
 }

 function getApples() {
   return appleAmount;
 }

return {
  getApples: getApples,
  setApples: setApples
  // sellApples: sellApples,
  // buyApples: buyApples,
  // getTotalApplesAmount: getTotalApplesAmount
};

})();

// shop.sellApples(24);
//
// var apples = shop.getTotalApplesAmount();
//
// console.log('apples ', apples);

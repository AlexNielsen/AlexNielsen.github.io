  var arr = [];

  for (var i = 0; i < 5; i++) {
  arr.push(prompt('Введите имя:', ''));
}

  function checkName(name) {
  if ( arr.indexOf(userName) > -1 ) {
  return true;
} else {
  return false;
}
}

var userName = prompt('А теперь введите-ка свое имя:', '');

if (checkName(name)) {
  alert(userName + ', Вы успешно вошли!');
} else {
  alert('Похоже, что Ваше имя Вы не вводили...');
}

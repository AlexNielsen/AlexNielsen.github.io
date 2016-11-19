var test = {
  createHeader: function () {
    var element = document.createElement('h1');
    element.innerHTML = 'Тест по программированию';
    var DOMElement = document.querySelector('body');
    DOMElement.appendChild(element);
  },

  createUl: function () {
    var element = document.createElement('ol');
    var DOMElement = document.querySelector('body');
    DOMElement.appendChild(element);
  },

  createOl: function (inner, addClass) {
    var element = document.createElement('li');
    element.innerHTML = inner;
    element.ClassName - addClass;
    var DOMElement = document.querySelector('ol');
    DOMElement.appendChild(element);
  },

  createAnswer: function (answer, DOM) {
    var input = document.createElement('input');
    console.log(DOM);
    var DOMElement = document.querySelector(DOM);
    console.log(DOMElement);
    DOMElement.appendChild(input);
    input.setAttribute("type", "checkbox");

    var label = document.createElement('label');
    label.innerHTML = answer;
    DOMElement.appendChild(label);
  },

  createButton: function () {
    var element = document.createElement('button');
    element.innerHTML = 'отправить результат';
    var DOMElement = document.querySelector('body');
    DOMElement.appendChild(element);
  },
}

test.createHeader();
test.createUl();

for (var i = 1; i < 4; i++) {
  test.createOl('Вопрос ' + i, 'question' + i);
  for (var j = 1; j < 4; j++) {
    test.createAnswer('Вариант ' + j, '.question' + i);
  }
}

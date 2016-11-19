var exp = document.getElementsByClassName('item-one item-two');
console.log(exp);


// var element = document.querySelectorAll('.menu-item a');
// var link = element[2];
//
// link.innerHTML = 'this is <strong>new text</strong>';
//
// link.removeAttribute('href', 'http://yandex.com');
//
// console.log(link.className);
//
// link.className = link.className + ' js-class';
//
// console.log('link.classList -> ', link.classList);
//
// link.classList.add('js-second-class');
//
// link.style.backgroundColor = 'green';
// link.style.fontSize = '30px';

var element = document.createElement('div');
element.classList.add('box');
element.innerHTML = 'dynamically created element';

var wrapper = document.querySelector('.wrapper');
// wrapper.insertBefore(element, wrapper.children[0]);

var list = wrapper.querySelector('ul');
wrapper.replaceChild(element, list);

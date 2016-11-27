var link = document.querySelector('a');
var listItem = document.querySelector('li');

function handlerLink(event) {
  console.log('handlerLink event target', event.target);
  event.preventDefault();
}

function handlerListItem(event) {
  console.log('handlerListItem event target', event.target);
  event.preventDefault();
}

link.addEventListener('click', handlerLink);
listItem.addEventListener('click', handlerListItem);

// link.onclick = function (event) {
//   console.log("link.onclick handler");
//   event.preventDefault();
// }

// function addEvent(el, event, callback) {
//   if (window.attachEvent){ //IE8-
//     el.attachEvent('on' + event, callback);
// } else {
//   el.addEventListener(event, callback);
//   }
// }

// addEvent(link, 'click', handler);

// window.addEventListener('keydown', handler);

// link.addEventListener('click', handler);

// element.addEventListener('click', handler);
// element.removeEventListener('click', handler);
//
// //IE8- синтаксис
// element.attachEvent('onclick', handler);
// element.detachEvent('onclick', handler);

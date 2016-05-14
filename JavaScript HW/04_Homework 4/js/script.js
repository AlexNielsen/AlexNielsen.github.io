var element = document.querySelectorAll('.menu-item a');
var link = element[2];

/*console.log("element[2].innerHTML ", element[2].innerHTML);*/

link.innerHTML = '<strong>this</strong> is new text';

link.removeAttribute('href');

console.log(link.className);
link.className = link.className + ' js-class';

console.log('link classList', link.classList);
link.classList.add('js-second-class');
link.style.backgroundColor = 'green';
link.style.fontSize = '30px';

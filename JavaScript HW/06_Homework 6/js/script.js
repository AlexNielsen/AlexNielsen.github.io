start.addEventListener('click', startClick);
pause.addEventListener('click', pauseClick);
stp.addEventListener('click', stopClick);


var count = 0, timerId, go = 0;
function startClick () {
  texter.innerHTML = 'startClick';
  if (go == 0) {
    timerId = setInterval(function () {
      count += 5;
      counter.innerHTML = count;
    }, 5);
    go = 1;
  }
}

function pauseClick() {
  clearInterval(timerId);
  go = 0;
  texter.innerHTML = 'pauseClick';
}

function stopClick() {
  clearInterval(timerId);
  go = 0;
  count = 0;
  counter.innerHTML = count;
  texter.innerHTML = 'stopClick';
}

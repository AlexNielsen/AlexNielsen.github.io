start.addEventListener('click', startClick);
pause.addEventListener('click', pauseClick);
stp.addEventListener('click', stopClick);


var count = 0, timerId, go = 0;
counter.innerHTML = "00:00:00:00";

function startClick () {
  texter.innerHTML = 'startClick';
  if (go == false) {
    timerId = setInterval(function () {
      count ++;
      var msek = count%100;

      if (msek < 10) {msek = "0" + msek;}
      if ((msek >= 10)&&(msek < 100)) {msek = "" + msek;}

      var sek = Math.floor(count/100)%60;
      if (sek < 10) {sek = "0" + sek;}

      var min = Math.floor(count/6000)%60;
      if (min < 10) {min = "0" + min;}

      var hours = Math.floor(count/360000)%24;
      if (hours < 10) {hours = "0" + hours;}

      var str = hours+":"+min+":"+sek+":"+msek;
      counter.innerHTML = str;
    }, 10);
    go = true;
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
  counter.innerHTML = "00:00:00:00";
  texter.innerHTML = 'stopClick';
}

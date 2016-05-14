var arr = ['1', true, 'false'];

var obj = {
  0: '1',
  1: true,
  2: 'false'
}

var student = {
  'age': 18,
  name: 'Vasya',
  mySecondName: 'Pupkin'
}

for (var key in student){
  console.log('_________');
  console.log('key', key);
  console.log('student[key]', student[key]);
}

var keysList = Object.keys(student);
console.log(keysList);

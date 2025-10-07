/*
전역 변수와 지역 변수
*/

var age = 20; //전역 변수
window.year = 7;

function getAge(year) {
  var age = 30;
  window.myAge = age + year;
  window.console.log(myAge); //35
}

window.getAge(5);
window.console.log(age, year); //20 7


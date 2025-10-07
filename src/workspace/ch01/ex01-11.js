/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var num1 = 5;
var num2 = 10;
var s1 = 5;
var num3 = '5'

console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 <= num3); //true
console.log(num1 >= num3); //true

console.log(num1 === num3); //false
console.log(num1 == num3); //true
console.log(num1 === s1); //true
console.log(num1 == s1); //true

console.log('ch05' < 'ch01'); //false
console.log('ch05' > 'ch01'); //true

console.log('ch12' > 'ch3'); //false
console.log('ch12' < 'ch3'); //true
/*
배열 요소의 합계, 홀수의 합계, 짝수의 합계를 출력
*/

const arr = [4, 5, 7, 2, 9, 8];
let sum = 0; //전체 합계
let oddSum = 0; //홀수 합계
let evenSum = 0; //짝수 합계

//모든 요소의 합계 출력
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  sum += num;
}
console.log('모든 요소의 합계', sum); //35

//홀수의 합계 출력
for (let sum of arr) {
  if (sum % 2 !== 0) {
    oddSum += sum;
  }
}
console.log('홀수 합계', oddSum); //21

//짝수의 합계 출력
for (let prop in arr) {
  if (arr[prop] % 2 === 0) { 
    evenSum += arr[prop]
  }
}
console.log('짝수 합계', evenSum); //14
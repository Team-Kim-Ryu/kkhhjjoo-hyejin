/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [4, 5, 7, 2, 9, 8];

let sum = 0;
let oddSum = 0;
let evenSum = 0;

console.log('1번')
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('모든 요소의 합계', sum);
for (let num of arr) {
  if (num % 2 !== 0) {
    oddSum += num;
  }
}
console.log('홀수 합계', oddSum);
for (let i in arr) {
  if (arr[i] % 2 === 0) { 
    evenSum += arr[i];
  }
}
console.log('짝수 합계', evenSum);



console.log('2번')
sum = 0;
oddSum = 0;
evenSum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('전체합계:', sum);
for (let elem of arr) {
  if (elem % 2) {
    oddSum += elem;
  }
}
console.log('홀수 합계:', oddSum);
for (let prop in arr) {
  if (!(arr[prop] % 2)) {
    evenSum += arr[prop];
  }
}
console.log('짝수 합계: ', evenSum);

console.log('3번')
sum = 0;
oddSum = 0;
evenSum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
console.log('for...of');
for (let list of arr) {
  if (list % 2 !== 0) oddSum += list;
}
console.log(oddSum);
console.log('for...in');
for (let list in arr) {
  if (arr[list] % 2 === 0) evenSum += arr[list];
}
console.log(evenSum);

console.log('4번')
sum = 0;
oddSum = 0;
evenSum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('모든 요소의 합계: ', sum);
for (let elem of arr) {
  if (elem % 2 !== 0) {
    oddSum += elem;
  }
}
console.log('홀수 합계: ', oddSum);
for (let prop in arr) {
  if (arr[prop] % 2 === 0) {
    evenSum += arr[prop];
  }
}
console.log('짝수 합계: ', evenSum);

console.log('5번');
sum = 0;
oddSum = 0;
evenSum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('모든 요소의 합계', sum);
for (let elem of arr) {
  if (elem % 2 !== 0) {
    oddSum += elem;
  }
}
console.log('홀수 합계', oddSum);
for (let elem in arr) {
  if (arr[elem] % 2 === 0) {
    evenSum += arr[elem];
  }
}
console.log('짝수 합계', evenSum);

//6번
console.log('6번')
sum = 0;
oddSum = 0;
evenSum = 0;
for (let i = 0; i < arr.length; i++) { 
  sum += arr[i];
}
console.log('모든 요소의 합계', sum);
for (let odd of arr) {
  if (odd % 2 !== 0) {
    oddSum += odd;
  }
}
console.log('홀수 합계', oddSum);
for (let even in arr) {
  if (arr[even] % 2 === 0) {
    evenSum += arr[even];
  }
}
console.log('짝수 합계', evenSum);
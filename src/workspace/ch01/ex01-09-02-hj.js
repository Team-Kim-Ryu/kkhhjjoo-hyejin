/*
대입 연산자 +=을 이용해서 1부터 10까지의 모든 수의 합계를 출력하세요.

출력 결과:
55
*/

// 합계를 저장할 변수를 0으로 초기화
let sum = 0;

sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;
sum += 6;
sum += 7;
sum += 8;
sum += 9;
sum += 10;

//최종 합계 출력;
console.log(sum);

// 방법 2
//for (let i = 0; i < 10; i++) {
//   sum += i;
// }
// console.log(sum);
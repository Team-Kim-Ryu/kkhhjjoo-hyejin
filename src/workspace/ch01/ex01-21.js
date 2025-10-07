/*
반복문 - for문
*/
//0부터 10까지 출력(while)
// let i = 0;
// while (i <= 10) { //조건식
//   sum += i;
//   i++;
// }

//1부터 10까지의 모든 수의 합계를 출력(for)
let sum = 0;
for (i = 1; i <= 10; i++) {
  sum += i;
}
console.log('합계', sum);

//1부터 몇까지 더하면 10000이 넘을까?(while)
sum = 0;
let count = 1;
while (sum < 100000) {
  sum += count;
  count++;
}
console.log(--count, sum);


sum = 0;
for (count = 1; count < 10000; count++) {
  sum += count;
}
console.log(--count, sum);

//1부터 10끼지의 숫자를 순차적으로 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//1부터 10까지의 합계
sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log('1부터 10까지의 합계:', sum);
}

//1부터 10까지의 홀수 합계
sum = 0;
for (let i = 1; i < 10; i += 2) { 
    sum += i;
    console.log('홀수 합계: ', sum);
}

//1부터 10까지의 짝수 합계
sum = 0;
for (let i = 2; i < 10; i += 2) {
  sum += i;
  console.log("짝수 합계: ", sum);
}
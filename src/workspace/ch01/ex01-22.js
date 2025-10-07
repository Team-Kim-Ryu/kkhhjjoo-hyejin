/*
반복문 - break, continue
*/

//const n = 1; //작은 수
//const m = 10; //큰 수

// n ~ m까지의 정수 중에서 가장 작은 짝수를 찾아서 출력하세요.
/*for (let i = m; i >=n; i--) { 
  if (i % 2 === 0) { 
    result = i;
  }
}
  */

//작은 수와 큰 수가 구분없이 입력될 경우
const n = Math.min(n1, n2);
const m = Math.max(n1, n2);

for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    result = i;
    break;
  }
}

console.log(`${n} ~ ${m} 정수 중 가장 작은 짝수:`, result);

// n ~ m까지의 정수 중에서 홀수만 찾아서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    console.log("홀수", i);
  }
}
// n ~ m까지의 정수 중에서 홀수와 짝수를 구분해서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    console.log('홀수:', i);
  } else {
    console.log('짝수: ', i);
  }
}

for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    console.log("홀수: ", i);
    continue;
  }
  console.log('짝수: ', i);
}



let odd = '';
let even = '';
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    odd += `홀수: ${i}\n`;
  } else {
    even += `짝수: ${i}\n`;
  }
}
console.log(odd);
console.log(even);
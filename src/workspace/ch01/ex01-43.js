/*
나머지 매개변수(Rest parameters)
*/

//모든 매개변수의 합계를 출력
//인자값이 모자랄 경우 0으로 처리
//인자값이 3개 이상일 경우에도 합계에 반영
function sum(n1 = 0, n2 = 0, ...args) {
  console.log(n1, n2, args)
  let result = 0;
  result = n1 + n2;

  for (let arg of args) {
    console.log(arg);
    result += arg;
  }
  console.log(result);
}

sum();
sum(1);
sum(1, 2);
sum(3, 4, 5);
sum(6,7,8,9,4,5,6,7,89,78,9,8,9,8,97,9,97,7,79,794)



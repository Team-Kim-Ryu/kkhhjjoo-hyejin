/*
2차원 배열
*/

const numbers = [
  [2, 4, 6, 8, 10],
  [3, 6, 9],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
  [6, 12, 18, 24]
];

console.log(numbers[0]); //[ 2, 4, 6, 8, 10 ]
console.log(numbers[1]); //[ 3, 6, 9 ]
console.log(numbers[2]); //[ 4, 8, 12, 16 ]
console.log(numbers[3]); //[ 4, 8, 12, 16 ]
console.log(numbers[4]); //[ 6, 12, 18, 24 ]

console.log(numbers[0][3]); //8
console.log(numbers[1][0]); //3
console.log(numbers[2][3]); //16
console.log(numbers[4][2]); //18

//for문을 이용해서 2차원 배열의 모든 요소의 합계를 출력하세요.
//결과:

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const row = numbers[i];
  console.log(row);
  for (let k = 0; k < row.length; k++) {
    console.log(k, row[k]);
    sum += row[k];
  }
}

sum = 0;
for (let row of numbers) {
  for (let num of row) {
    sum += num;
  }
}
console.log('모든 요소의 합계: ', sum);
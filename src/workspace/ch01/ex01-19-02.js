/*
switch문을 이용해서 학점을 출력하세요

*/


//점수는 0~100점 사이의 정수
const score = 79;
//학점 계산
// A: 90점 이상 100점 이하
// B: 80점 이상 90점 미만
// C: 70점 이상 80점 미만
// D: 60점 이상 70점 미만
// F: 60점 미만
let grade = '';

//점수에서 10의 자리만 꺼내기
//79/10 => 7.9 => parseInt(7.9) => 7

switch (parseInt(score / 10)) {
  case 10:
  case 9:
    grade = 'A';
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "F";
    break;
}

console.log(`${score}:${grade} 등급`)// 79: C학점
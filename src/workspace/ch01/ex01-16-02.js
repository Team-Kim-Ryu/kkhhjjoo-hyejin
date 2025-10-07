/*
 if문을 이용해서 학생의 점수에 따라 학점을 계산하고 출력하는 프로그램을 작성합니다.
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

if (score >= 90 && score <= 100) {
  grade = 'A';
}
if (score >= 80 && score < 90) {
  grade = 'B';
}
if (score >= 70 && score < 80) {
  grade = 'C';
}
if (score >= 60 && score < 70) {
  grade = 'D';
}
if (score < 60) {
  grade = 'F';
}

console.log(`${score}:${grade} 등급`); //79: C학점
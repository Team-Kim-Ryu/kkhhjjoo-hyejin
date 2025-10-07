/*
국어, 영어, 수학 점수의 총점과 평균을 출력(JSON 이용)
*/


const score = {
  name: '객체핑',
  kor: 95,
  eng: 90,
  math: 85
}

score.sum = score.kor + score.eng + score.math;

score.avg = Math.round(score.sum / 3);

console.log(score.name, '의 총점: ', score.sum);
console.log(score.name, '의 평균: ', score.avg);

score.eng += 10;
score.sum = score.kor + score.eng + score.math;
score.avg = Number((score.sum / 3).toFixed(2));
console.log(score.name, '의 총점: ', score.sum);
console.log(score.name, '의 평균: ', score.avg);
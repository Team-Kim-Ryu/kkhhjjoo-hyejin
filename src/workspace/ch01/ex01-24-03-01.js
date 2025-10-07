/*
국어, 영어, 수학 점수의 총점과 평균을 출력(JSON 이용, 메서드 추가)
*/

const score = {
  name: '객체핑',
  kor: 90,
  eng: 80,
  math: 75,
  sum: function () {
    return score.kor + score.eng + score.math;
  },
  avg: function () {
    return Math.round((score.sum() / 3) * 10 ** 2) / 10 ** 2;
  }

}

console.log(score.name, '총점: ', score.sum());
console.log(score.name, '평균: ', score.avg());

score.eng += 10;

console.log(score.name, '총점: ', score.sum());
console.log(score.name, '평균: ', score.avg());
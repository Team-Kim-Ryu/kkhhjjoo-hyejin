/*
if-else문
*/

const age = 15;

//age가 20 이상이면 '성인' 출력 그렇지 않으면'미성년자' 출력
if (age >= 20) {
  console.log('성인');
} else { 
  console.log('미성년자');
}


const num = 0;

//num이 양수이면 '양수' 출력
//num이 음수이면 '음수' 출력
//num이 0이면 '영' 출력
if (num > 0) {
  console.log('양수');
} else { 
  if (num < 0) { 
    console.log('음수');
  } else {
    console.log('영');
  }
}

const password = '12345';

//password가 '1234'이면 '로그인 성공' 출력 그렇지 않으면 '로그인 실패' 출력
if (password === '1234') {
  console.log('1234')
} else { 
  console.log('로그인 실패');
  
}
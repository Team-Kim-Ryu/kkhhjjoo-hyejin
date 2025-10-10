/*
if-else 문을 이용하여 사용자의 로그인 상태와 사용자의 등급을 출력하세요.
*/

const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;

//로그인 상태 출력
//"로그인 상태", 로그아웃 상태
if (isLogin) {
  console.log('로그인 상태');
} else { 
  console.log('로그아웃 상태');
}

//사용자 유형 출력
// "구매자/"판매자/관리자
if (isUser == true) { 
  console.log('구매자');
}
if (isSeller == true) { 
  console.log('판매자');
}
if (isAdmin == true) { 
  console.log('관리자');
}

//로그인 상태와 사용자 유형을 조합해서 출력
//"구매자 로그인 상태"/ 구매자 로그아웃 상태
//판매자 로그인 상태/ 판매자 로그아웃 상태
//관리자 로그인 상태/ 관리자 로그아웃 상태


//다른 방법
if (isLogin) {
  if (isUser) console.log('구매자 로그인 상태');
  if (isSeller) console.log('판매자 로그인 상태');
  if (isAdmin) console.log('관리자 로그인 상태');
} else { 
  if (isUser) console.log('구매자 로그아웃 상태');
  if (isSeller) console.log('판매자 로그아웃 상태');
  if (isAdmin) console.log('관리자 로그아웃 상태');

}
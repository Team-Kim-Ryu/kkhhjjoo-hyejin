/*
매개변수를 가진 함수 - 도어락

예시)
*/

/**
 * 올바른 비밀번호가 입력되면 문이 열리고 (띠리링을 출력)
* 잘못된 비밀번호가 입력되면 경보음이 울린다.(삐! 삐! 삐! 삐! 출력)
 * 예시)
 * - doorLock('11111') -> 삐! 삐! 삐! 삐!
 * - doorLock('1357') -> 띠리링
 * - doorLock() -> 삐! 삐! 삐! 삐!
 * @param {*} password - 비밀번호
 */
function doorLock(inputPwd) {
  //실제 비밀번호
  const pwd = '1357';

  if (inputPwd === pwd ||inputPwd.slice(-4) === pwd ) {
    console.log('띠리링', inputPwd);
  } else {
    console.log('삐! 삐! 삐! 삐!', inputPwd);
  } 
}

doorLock('1234');
doorLock('1357');
doorLock('');
doorLock('Hello');
doorLock('2342341357');


//테스트 케이스
//doorLock('11111'); //삐! 삐! 삐! 삐!
//doorLock('1357'); //띠리링
//doorLock(); //삐! 삐! 삐! 삐!
//doorLock('1564646511357'); //띠리링


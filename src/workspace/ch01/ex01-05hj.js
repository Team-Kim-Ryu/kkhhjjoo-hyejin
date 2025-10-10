/*
변수 선언
*/

// a 변수 선언
var a;
// a 변수에 100이라는 값을 할당
a = 100;
// a 값을 200으로 재할당(수정)
console.log('a의 값', a );
a = 200;
// 여러 변수 동시 선언
var b, c; // 변수 두개 선언, 선언만 된 상태의 변수는 undefined 값을 가짐
var d = 300; // 변수 선언 + 초기화
console.log('b 의 값', b);// undefined
console.log('c의 값', c);// undefined
console.log('d의 값', d);

// 선언하지 않은 변수를 사용할 경우 에러 발생
// console.log('e의 값은?', e);

// 일반적인 변수명
var age = 25;
var userName = '이쁜이';
var userName2 = '이쁜이 2';
// var 라는 함수가 재할당을 할 수 있기 때문에 변수 이름을 동일하게 해도 상관없다
// 다만 var 라는건 학습 할때만 하기 때문에 주의 

//var 3userName = '이쁜이'; 라고 할경우에 식별자 규칙으로 숫자로 시작은 안됨 
//숫자로 사용은 안되는거지 _ 또는 $ 사용 가능하기때문에 변수 설정 
var $userName = "머니핑"; 

// 특수 문자 사용시 
var $$$ = 100000;
var ________ = "몇개일까? "; 

//사용자 정보 변수 작성 
var userName = "핑크핑 ";
var userAge = 29;
var userGender = "남자";
var userEmail = 'user@gmail.com';


// 일일히 쓰기 번거로워서 변수로 가져오기
console.log('=== 회원 정보 ===');
console.log('이름', userName);
console.log('나이', userAge);
console.log('성별', userGender);
console.log('이메일', userEmail);
console.log('이메일', userEmail);
console.log('이메일', 'usar@gmail.com');
console.log('이메일', 'user@gmail.com');
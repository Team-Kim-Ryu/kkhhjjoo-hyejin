/*
new Object() - 생성자 함수로 객체 생성
*/


//첫번째 user
const userName = '김하연';
const age = 27;
const hobby = '객체연구';
console.log(userName, age, hobby);

//두번째 user
const userName2 = '김현주';
const age2 = 34;
const hobby2 = '객체연구2';
console.log(userName2, age2, hobby2);

const user = new Object(); //Object 생성자 함수로 객체 생성

//점 표기법
user.name = '김민우';
user.age = 32;

user['hobby'] = '밥먹기';

console.log(user.name, user['age'], user.hobby);

const user2 = new Object();

user2.name = '류혜진';
user2.age = 34;

user2['hobby'] = '코딩짜기';

console.log(user2.name, user2['age'], user2.hobby);
console.log(typeof user, user);

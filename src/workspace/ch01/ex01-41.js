/*
구조 분해 할당(Destructuring assignment)
*/
const foo = ['yellow', 'green', 'blue'];

const [one, two, three] = foo;

console.log(one, two, three); //yellow, green, blue

const user = { userName: '구분할핑', userAge: 30 };


//구조분해할당(객체)
const { userName, userAge: age } = user;
console.log(userName, age); //구조분해할당핑 30

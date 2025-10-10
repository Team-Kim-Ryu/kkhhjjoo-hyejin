/*
대입 연산자 =, +=, -=, *=, /=, %=, **=
*/


let age = 20; //나이는 20살 
let year = 3 + 2;
// console.log(age , year);

// age에 year를 더한 값을 다시 age에 대입
age = year + age;
console.log(age);
// += 연산자를 사용해서 age에 year를 더한 값을 다시 age에 대입

age += year + age;
console.log(age);

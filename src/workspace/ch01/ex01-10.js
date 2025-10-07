/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0;
console.log(count);

count = count + 1; //
count += 1; //2 
count++; //3

console.log(count); //3

console.log(count++); //후위형일 경우 3
console.log(++count); //전위형일 경우 5
console.log(count); //5

console.log(++count); //전위형일 경우 6
console.log(count++); //후위형일경우 6
console.log(count); //7

var sum = count++ + 10; //7 + 10 = 17
console.log(sum); //17

sum = ++count + 10; //9 + 10 = 19
console.log(sum); // 19


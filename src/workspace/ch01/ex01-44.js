/*
전개 구문(Spread syntax)
*/

//배열일 경우
const state = ['orange', 'yellow', 'green', 'black'];

//참조복사
// const newState = state;

//객체 복사(얕은 복사)
// const newState = [];
// for (let i = 0; i < state.length; i++) {
//   newState[i] = state[i];
// }

const newState = [...state];

console.log(state, newState);
console.log(state === newState);

//객체일 경우
const state2 = { userName: '전개핑', age: 30 };

//참조 복사
// const newState2 = state2;
// newState2.age += 10;
// state2.age += 10;

//객체 복사(얕은 복사)
const newState2 = { ...state2, job: 'student' };
newState2.age += 10;

console.log(state2, newState2);
console.log(state2 === newState2);

//함수의 인자값을 전개구문으로 전달
function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  console.log(sum);
}
const numbers = [10, 20, 30, 40];
sum(...numbers);
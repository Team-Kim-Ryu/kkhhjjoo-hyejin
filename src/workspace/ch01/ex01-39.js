/*
변수 선언문 var, let, const
*/
/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1 
 * @param {number} n2 
 */
function max(n1, n2) {
  let result;
  if (n1 > n2) {
    result = n1;
  } else { 
    result = n2;
  }
  return result;
}

console.log(max(10, 20)); //20
console.log(max(200, 30)); //200


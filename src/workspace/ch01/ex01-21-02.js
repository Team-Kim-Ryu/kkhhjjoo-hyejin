/*
반복문 - for문
*/

/*



*
**
***
****
*****

*/

const lines = 5;

for (let i = 0; i < lines; i++) {
  let star = "";
  for (let k = 0; k <= i; k++) {
    star += "*";
  }
  console.log(star);
}

/*
*****
****
***
**
*
*/
for (let i=0; i<lines; i++) {
  let star = '';
  for (let k=0; k<(lines-i); k++) {
    star += '*';
  }
  console.log(star);
}

/*
    *
   **
  ***
 ****
*****
*/
// 한정아
for (let i=0; i<lines; i++) {
  let star = '';
  for (let k=0; k<((lines-1)-i); k++) {
    star += ' ';
  }
  for (let k=0; k<=i; k++) {
    star += '*';
  }
  console.log(star);
}

/*
    *
   ***
  *****
 *******
*********
*/

for (let i=1; i<=lines; i++) {
  let space = '';
  let star = '';
  // 공백 생성
  for (let k=0; k<lines-i; k++) {
    space += ' ';
  }
  for (let k=0; k<i*2-1; k++) {
    star += '*';
  }
  console.log(space + star);
}

/*
*********
 *******
  *****
   ***
    *
*/
for (let i=1; i<=lines; i++) {
  let space = '';
  let star = '';
  // 공백 생성
  for (let k=0; k<i-1; k++) {
    space += ' ';
  }
  for (let k=0; k<(lines-i)*2+1; k++) {
    star += '*';
  }
  console.log(space + star);
}
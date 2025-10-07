/*
반복문 - for문
*/

/*
출력:
2 x 1 = 2
2 x 2 = 4
...
*/

//2단 출력
for (let i = 1; i <= 9; i++) {
  console.log(`2 x ${i} = ${2*i}`);
}

/*
2단부터 9단까지 출력

2 x 1 = 2   3 x 1 = 3  ...  9 x 1 = 9
2 x 2 = 4   3 x 2 = 9  ...  9 x 2 = 18
2 x 3 = 6   ..
..                      ...  ... 
2 x 9 = 18  3 x 9 = 27  ...  9 x 9 = 81
*/

for (let dan = 2; dan <= 9; dan++) { 
  console.log(`---${dan}단 ---`);

  for (let num = 1; num <= 9; num++) { 
    const result = dan * num;

    console.log(`${dan} X ${num} = ${result} \t`);
  }
}
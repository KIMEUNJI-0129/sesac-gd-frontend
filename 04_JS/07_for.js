console.log('connected!');

// for문
/*
    for(for문 내에서 사용할 변수 선언; 조건식(어디까지 증가/감소할지 작성); 증감식) {
        반복할 코드
    }
*/
// i + 1 = i / i += i / i++ -> 모두 동일한 뜻
// i - 1 = i / i -= i / i -- -> 모두 동일한 뜻
// i++ : 변수 i에서 값을 꺼낸 뒤 1을 더함
// i-- : 변수 i에서 값을 꺼낸 뒤, 1을 뺌

// 5씩 늘리고 싶을 때 -> i += 5 -> i를 5씩 늘림

for (let i = 0; i < 10; i++) {
  //   console.log('안녕', i);
  console.log(`안녕 ${i}`);
}

// i를 다시 사용해도 상관없는 이유 : 아래 for문 안에서만 사용되기 때문이다!
for (let i = 0; i < 10; i += 3) {
  console.log(`안녕 ${i}`);
}

// 1부터 5까지 1씩 증가하면서 출력하는 방법
// 1. i <=5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// 2. i < 6
for (let i = 0; i < 6; i++) {
  console.log(i);
}

console.log('---------------------------');
// 5부터 1까지 1씩 감소하면서 출력하기
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log('---------------------------');

// 퀴즈. 1부터 n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;
for (let i = 0; i <= n; i += n) {
  console.log(i);
}
// 정답
for (let i = 1; i <= n; i++) {
  result = result + i;
  //   result += i;
}
console.log(result);

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기
let cafe = ['americano', 'latte', 'esspresso', 'lemon_tea'];
console.log(cafe.length); // 배열의 길이를 출력 -> 4 -> 0부터 시작하기때문에 i는 cafe.length보다 작아야한다.
for (let i = 0; i < cafe.length; i++) {
  console.log('cafe menu', cafe[i]);
  // i=0일 때 cafe[0]
  // i=1일 때 cafe[1]
  // i=2일 때 cafe[2]
  // i=3일 때 cafe[3]
  // 5번 째 반복하지 않아요! -> i가 4이기 때문! -> 조건식이 false여서 for문 종료.
}

// 배열 요소의 총 합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  numSum = numSum + numArr[i];
  // numSum += numArr[i];
}
console.log(numSum);

// for문과 if문 함께 사용
// 짝수만 출력
// 1. for문만 사용
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 2. if문과 함께 사용
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.clear();

// 구구단 2단 만들기
console.log('2단');
for (let i = 1; i <= 9; i++) {
  console.log(`2 * ${i} = ${2 * i}`);
}

// 원하는 구구단 출력
// const number = 2;
const number = Number(prompt('원하는 단을 입력해주세요.'));
console.log(number + '단');
for (let i = 1; i < 10; i++) {
  //   console.log(number + '*' + i + '=' + number * i);
  console.log(`${number} * ${i} = ${number * i}`);
}

// 이중 for문
for (let i = 0; i < 5; i++) {
  console.log('i : ', i);

  for (let j = 0; j < 10; j++) {
    console.log(`현재 i는 ${i}이고, j는 ${j}입니다.`);
  }
}
// 첫번째 for문을 건너가다가 안에 두번째 for문을 만나고,
// 두번째 for문이 다 돌고나면, 다시 첫번째 for문으로 돌아가는 것.

// 1~9단까지의 구구단
for (let i = 2; i < 10; i++) {
  console.log(i + '단');

  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// ---------------------------------------------------------
// while 문
/*
  while (조건) {
    조건에 만족하는 동안 실행될 코드
  }
*/
// 조건을 제어하는 구문이 없기 때문에 무한루프에 빠지지 않도록 주의해서 사용
let num = 1;
while (num <= 5) {
  console.log(num);
  num++; // num = num + 1;
}

// while을 사용해 9부터 4까지 출력
num = 9;
while (num >= 4) {
  console.log(num);
  num--;
}

console.log('----------------1부터 10까지 짝수----------------');

// while문 사용해 1부터 10까지 짝수 출력
num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

console.log('----------------10부터 1까지 홀수----------------');

// Quiz. while문 사용해 10부터 1까지 홀수 출력
num = 10;
while (num >= 1) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num--;
}

console.log('----------------break----------------');

// 무한루프 -> 조건식이 참이면 무한히 while문을 빠져나올 수 없음
let num2 = 0;
while (true) {
  console.log(num2);
  num2++;

  // break; // break 없다면 무한루프 또는 빠져나가야 할 조건을 설정
  // num2가 11이 되는 순간 if의 조건이 참이되면서 break 를 만난다.
  if (num2 > 10) {
    break;
  }
}
// break는 일단 만나면 반복이 끝나버린다!

console.log('----------------confirm 사용----------------');

num2 = 0;
while (confirm('계속 할까요?')) {
  // confirm의 확인 버튼은 true, 취소 버튼은 false를 반환
  // 취소 버튼 클릭 시 조건이 false가 되어 반복문 종료
  num2++;
  alert(`${num2}번째 alert창`);
}

// ------------------------실습1. 0~100 숫자 중 2 또는 5의 배수 총 합계 구하기
// ------------------------for문 사용
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);
/*
let pracSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 ===0) {
    pracSum += i;
  }
}
console.log(pracSum);
*/

// ------------------------while문 사용
sum2 = 0;
let num3 = 0;
while (num3 <= 100) {
  if (num3 % 2 === 0 || num3 % 5 === 0) {
    sum2 += num3;
  }
  num3++;
}
console.log(sum2);
/*
let pracNum = 0;
let pracSum2 = 0;

while (number <= 100) {
  if (pracNum % 2 === 0 || pracNum % 5 === 0) {
    pracSum2 += pracNum;
  }
  pracSum++;
}
console.log(pracSum2);
*/

// ------------------------실습2. 13의 배수이면서 홀수 찾기
for (let i = 0; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}
/*
let input = Number(prompt('숫자를 입력해주세요.'));

for (let i = 0; i <= input; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}
*/

// ------------------------실습3. 이중 for문을 사용해 구구단 출력
// i : 구구단의 단 / j : 단에 곱해줄 수
/*
for (let i = 2; i <= 9; i++) {
  console.log(`---${i} 단---`)
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j})
  }
}
*/

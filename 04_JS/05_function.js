console.log('connected!');

/* 
  함수
  - 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
  - 함수 정의 -> 함수 호출
  - 함수 정의 / 선언 구조
    - keyword: function
    - name: 함수 이름 (camelCase로 많이 작성)
    - 매개변수(=인자, parameter, arguments): 함수 선언 시 매개변수로 받을 것
    - body(=scope): 함수 내부 코드
  - 함수 정의 / 선언 방식
    - 함수 선언문 (명시적 함수 선언)
      - function 키워드 사용
      - ex. function name() {}
    - 함수 표현식
      - 함수 이름 작성 X -> 변수를 만들어 함수를 저장
      - 참고) JS에서는 함수가 값이기 때문에 가능한 방식
      - ex. const funcName = function() {}
      - 화살표 함수
        - function 키워드 사용하지 않고, 화살표로 작성
        - ex. const funcName = () => {}
    (참고) 함수 선언문 vs 함수 표현식
      - 함수 선언문 : function funcName() {} 형태로 작성 / 함수 선언 전 호출 가능
      - 함수 표현식 : const funcName = function() {} / 함수 선언 전 호출 불가
*/

// 함수 정의 전에 불러 올 수 있나?
helloWorld1(); // 명시적 함수 -> 가능
// helloWorld2(); // 표현식 함수 -> 불가능

// 함수 정의
// 1. 명시적 함수 선언 -> 함수 선언문
function helloWorld1() {
  console.log('HelloWorld!1');
}
// 함수 호출
helloWorld1();

// 2-1. 함수 표현식
const helloWorld2 = function () {
  console.log('HelloWorld!2');
};
// 함수 호출
helloWorld2();

// 2-2. 화살표 함수
const helloWorld3 = () => {
  console.log('helloWorld!3');
};
// 함수 호출
helloWorld3();

// return 사용
/* 
  return: 반환 값 -> 함수 내부 코드의 "최종 결과 값"
  console.log()로 콘솔을 찍는 것에서 그치지 않고,
  함수 내부 코드의 최종 결과값을 저장하고 보관하기 위한 키워드
  - 함수 블럭 안에서 return 키워드를 만나면 함수 실행 중단
*/

// 인자없이 return 값만 가지고 있는 함수
function onePlusOne() {
  return 1 + 1;
}

// onePlusOne(); // -> 2 적은 것과 동일 // 이전 것들은 이미 함수 안에서 console.log를 넣어서 선언해주었기 때문에, 쓸 필요가 없었음!
console.log(onePlusOne()); // -> console.log(2) -> 콘솔 창에 2 찍음

function numPlusOne(num) {
  return num + 1;
}
console.log(numPlusOne(5)); // num -> 5 -> 5 + 1 -> 6을 반환 -> console.log(6)

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(5, 20)); // num1 -> 5 , num2 -> 20, 25를 반환

// 함수의 반환값을 변수에 저장해서 사용
const result = sum(5, 20);
console.log(result);
// 굳이 이렇게 인자를 받아서 사용하는 이유는? -> 여러번 사용이 가능하기 때문이다!
const result2 = sum(100, 11);
console.log(result2);

console.log('===============================');

function hello(name) {
  alert(`Hello! ${name}`);
}
const userName = 'lucy';
hello(userName);

// 실습 과제
// multifly 함수 만들기
function multifly(num1, num2) {
  return num1 * num2;
  console.log('aa'); // return 문 다음 코드는 실행하지 않음
}

console.log(multifly(7, 3)); // 21
console.log(multifly(4, 10)); // 40

//square 함수 만들기
function square(num) {
  return num ** 2;
}

console.log(square(4));

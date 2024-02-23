console.log("connected!");

// 대입 연산자
// =
// 변수에 값을 할당할 때 사용하는 연산자
let a = 1;
const b = 1;

// 비교 연산자
// == , !=
// 피연산자와 값이 같은지 비교
// 타입이 달라도 괜찮음 -> 값만 비교하기 때문
console.log("=============비교 연산자============="); //console 창에 구분해주려고 넣음!
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(1 == "1"); //true
console.log(1 != 1); //false -> 1과 1이 같지 않다! -> 아니? 같은데? -> 거짓! -> false
console.log(1 != 2); //true -> 1과 2는 같지 않다! -> 맞아 달라 -> 참! -> true
console.log(1 != "1"); //false

// === !==
// 피연산자의 값과 타입을 모두 비교
// 엄격한 동등 연산자
console.log("=========================="); //console 창에 구분해주려고 넣음!
console.log(1 === 1); //true
console.log(1 === 2); //false
console.log(1 === "1"); //false -> 숫자 1과 문자 1은 다른 타입!
console.log(1 !== 1); //false -> 숫자 1과 숫자 1은 같지 않다! -> 아닌데? 같은데 -> 거짓! -> false
console.log(1 !== 2); //true -> 숫자 1과 숫자 2는 같지 않다! -> 맞아 달라 -> 참 -> true
console.log(1 !== "1"); //true -> 숫자 1과 문자 1은 같지 않다! -> 맞아 달라 -> 참 -> true

// 크기 비교 연산자
// >, >=, <, <=
console.log("=============크기 비교 연산자============="); //console 창에 구분해주려고 넣음!
console.log(2 > 1); //2는 1보다 크다! -> 참 -> true
console.log(1 >= 1); //1은 1보다 크거나 같아? -> 같아! -> 참 -> true
console.log(2 < 1); //2는 1보다 작다 -> 아니 큰데? -> 거짓 -> false
console.log(1 <= 1); //1은 1보다 작거나 같다 -> 같아! -> 참 -> true

// 산술 연산자
// +, -, *, /, %(나머지), **(제곱)
console.log("=============산술 연산자============="); //console 창에 구분해주려고 넣음!
console.log(1 + 2); //3
console.log(1 - 2); //-1
console.log(1 * 2); //2
console.log(1 / 2); //0.5
// 나머지 연산자
console.log(1 % 2); //1 -> 값:0 나머지:1
console.log(8 / 5); // 값:1 나머지:3 -> 3 출력
console.log(1 ** 2); //1

// 논리 연산자
// !, ||, &&
console.log("=============논리 연산자============="); //console 창에 구분해주려고 넣음!
console.log(!true); //true
console.log(!false); //false
console.log(!!true); // -> 처음에 true -> !때문에 false -> !때문에 true -> 결과적으로 true
console.log(!!false); //false
console.log("=========================="); //console 창에 구분해주려고 넣음!
console.log(true && true);
console.log(1 < 2 && 1 < 5); //true
console.log(1 > 2 && 1 < 5); //false
console.log(true || true); //true
console.log(true || false); //true -> 둘 중 하나만 true 여도 true를 반환하여라.
console.log(1 < 2 || 1 < 5); //true
console.log(1 > 2 || 1 > 5); //false

// 연산자 응용
console.log("=============논리 연산자 응용============="); //console 창에 구분해주려고 넣음!

console.log(!(2 > 1));
console.log(2 > 1 && -2 < 1); // true 둘 다 참이기 때문!
console.log((2 > 1 && -2 < 1) || 5 > 3); // or 연산자인 ||연산자를 사용하면, 둘 중 하나만 true여도 true 반환

// Quiz
// 코드 결과 작성
console.log("=============퀴즈============="); //console 창에 구분해주려고 넣음!
console.log(3 <= 1); //false
console.log(7 == "7"); //true
console.log(-10 >= -11); //true

console.log("=============텍스트============="); //console 창에 구분해주려고 넣음!
const aa = "a";
console.log(aa);
console.log("a");
console.log("원하는 텍스트 출력 가능");

console.log(aa, "쉼표"); // 자동으로 띄어쓰기 됨
console.log(aa + "+연산자"); // 전부 연결해서 출력됨

//" 안녕 나는 김은지야." 출력해보기
const name = "김은지";
console.log("안녕 나는", name + "야.");
console.log(`안녕 나는 ${name}야.`); //백틱 사용해서 변수를 ${} 안에 넣기 -> tab키 위에 있음. ``

console.log("name: ", name);

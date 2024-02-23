console.log("connected!");

// 기본형 (Primitive type)
// 1. String
// - 텍스트 정보
// - 따옴표로 감싸야 함
// - 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자열임

const myName = "신데렐라";
const email = "glassshoes@gmail.com";
const gender = "female";
console.log(myName);
console.log(email);
console.log(gender);

//문자와 변수를 동시에 사용하기
console.log("=========================="); //console 창에 구분해주려고 넣음!
const aa = "a";
console.log(aa);
console.log("a");
console.log("원하는 텍스트 출력 가능");

console.log(aa, "쉼표"); // 자동으로 띄어쓰기 됨
console.log(aa + "+연산자"); // 전부 연결해서 출력됨

//" 안녕 나는 김은지야." 출력해보기
const name = "김은지";
console.log("안녕 나는", name + "야.");

// 템플릿 리터럴(읽기 쉽게 하기 위해서)
// 문자열 내 변수를 간결하게 표현
// 백틱 `` 기호와 달러, 중괄호(${}) 사용
console.log(`안녕 나는 ${name}야.`); //백틱 사용해서 변수를 ${} 안에 넣기 -> tab키 위에 있음. ``
console.log("name: ", name);
const printHello = "안녕 나는 ${name}}야"; // 문자열로 저장됨

// 2. number
// 숫자 (정수, 소수)
// 연산 가능
let number = 123;
let opacity = 0.7;
let add = 1 + 2;

// 3. boolean
// true, false 중에서 하나의 값을 가지는 논리 요소
let checked = true;
let isShow = false;

// 4. undefined
// 값도 없고 타입도 지정되어 있지 않은 상태
let undef;
console.log(undef); //undefined
let obj = {
  abc: 123,
};
console.log(obj.abc); //.을 이용해서 obj 안의 값을 넣어주면 123 값을 출력
console.log(obj.def); //obj 안에 def가 없기 때문에, 출력하려고 해도 undefined 가 나온다.

// 5. null
// 빈 값. null 타입으로 타입 존재하지만 값은 없다.
// 값이 없다는 것을 의도적으로 명시할 때 사용 -> 개발자가 직접 null 값을 할당
let empty = null;
console.log(empty);

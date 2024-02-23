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

console.log("=============배열============="); //console 창에 구분해주려고 넣음!

// 6. array - 배열
// 순서가 있는 데이터의 묶음
let fruits = ["apple", "orange", "banana", "grape"];
let fruits2 = new Array("apple", "orange", "banana", "grape");
console.log(fruits);
console.log(fruits2);
console.log(fruits[2]); // 2번 인덱스 요소를 뽑아 콘솔에 찍음

let arr = [1, "str", false, null, undefined];
console.log(arr);

// Quiz. 아래의 배열에서 '아이스크림' 콘솔에 찍기
const letters = [
  "사", //0 0부터 시작!
  "스", //1
  "자", //2
  "크", //3
  "진", //4
  "안", //5
  "리", //6
  "이", //7
  "가", //8
  "수", //9
  "림", //10
  "나", //11
  "아", //12
  "으", //13
  "차", //14
  "운", //15
];

console.log(letters[12] + letters[7] + letters[1] + letters[3] + letters[10]);
console.log("=============배열 응용============="); //console 창에 구분해주려고 넣음!

// 배열 응용
// 다차원 배열
// 배열 안에 배열이 있는 형태
const korean = [
  ["가", "갸", "거", "겨"], //배열 안의 0번째
  ["나", "냐", "너", "녀"], //배열 안의 1번째
  ["다", "댜", "더", "뎌"], //배열 안의 2번째
];

console.log(korean);
console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);

//'냐' 를 콘솔에 찍기
console.log(korean[1][1]); //1번째 배열의 1번째 요소

// Quiz. 아래의 배열에서 '아이스크림' 콘솔에 찍기
const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters2[3][0] +
    letters2[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

console.log("=============객체============="); //console 창에 구분해주려고 넣음!

// 7. object - 객체
// 배열은 순서가 있는 반면에 객체는 (키: 값) 형태로 작성
// { key1: value1, key2: value2, ...}
let cat = {
  name: "장화",
  age: 13,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};

// 점 표기법
console.log(cat.name); //장화
console.log(cat.age); //13
console.log(cat.mew); //함수를 출력

// 대괄호 사용
console.log(cat["name"]); //문자에 따옴표 붙이는거 잊지 않기!
console.log(cat["isCute"]);

//변경과 추가 가능
cat.like = "layla";
console.log(cat);
cat.name = "홍련";
console.log(cat);

/*
  JS의 자료형 -> 데이터 타입
  - 기본형 (Primitive)
    - String
    - Number
    - Boolean
    - Null
    - Undefined
  - 객체(Objict)
    - array (배열)
    - object (객체) -> (키: 값)을 쌍으로 가지고 중괄호{} 안에 감싸여 작성된 것
  */

// JS의 이상한 자동 형변환
// '+' 만 문자열이 그대로 문자열로 취급되어서 '문자의 나열'로 나오고 나머지는 다 문자가 숫자로 변환되어 계산되어 나온다.
let a = "3";
let b = 2;
let c = "10";

console.log(a + c); // 문자열은 단순히 더해서 나온다. '310'
console.log(c - a); // 7 -> 숫자가 됨
console.log(a * c); // 30 -> 숫자가 됨
console.log(c / a); // 3.3333... -> 숫자가 됨

// 숫자 + 문자
console.log(b + a); // '23' -> 숫자가 문자열로 변환되어 문자의 나열로 나온다.
console.log(b - a); // -1 -> 문자가 숫자로 변환되어 계산됨

// 실습
let introduce = {
  name: "kimeunji",
  interest: ["music", "movie", "coffee"],
  hobby: [
    "playing games",
    "singing",
    "eating delicous food",
    "cooking",
    "daincing",
    "exercising",
  ],
  isLeader: true,
  MBTI: "enfj",
};
console.log(introduce);

// 자료형 확인
// typeof
// 피연산자의 데이터 타입을 문자열로 변환
console.log("=============typeof============="); //console 창에 구분해주려고 넣음!
console.log(typeof "문자열"); // String
console.log(typeof 234); // Number
console.log(typeof {}); // Object
console.log(typeof []); // Object
console.log(typeof NaN); // NaN: Not A Number -> Number // 숫자 아닌 것을 숫자 취급할 때 사용. 기본이 숫자여야 하기 때문에 숫자로 나온다.
let und;
console.log(typeof und); //undefined

console.log("=============형 변환============="); //console 창에 구분해주려고 넣음!
// prompt("값을 입력해주세요.");

// 형 변환
// 1. ? -> 문자로 변경
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(String(str1)); // 'true'
console.log(typeof String(str1)); // string
console.log(String(str2)); // '123'
console.log(String(str3)); // 'null'
console.log(str1.toString()); // 'true'
//typeof 로 확인해보면 모두 string이 나온다! = 다 숫자 타입으로 형 변환이 된 것.

// 2. ? -> 숫자
let n1 = true;
let n2 = false;
let n3 = "12345";
let n4 = "123.9";
console.log(Number(n1)); //1 -> true
console.log(Number(n2)); //0 -> false
console.log(typeof Number(n1)); // number로 바뀐 것이 확인이 되었다!
console.log(Number(n3)); // 12345
console.log(Number(n4)); // 123.9

//parseInt를 사용해서 숫자로 변환
console.log(parseInt(n3)); // 12345
console.log(parseInt(n4)); // 123 -> 정수로 변환시키는 것이기 때문에, 소수 점 버린다.
console.log(parseFloat(n4)); // 123.9 -> 소수 점 안 버린다.

// 실습 - 수학점수와 영어점수를 더해서 평균값을 정확한 값으로 나오게 하기.
let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);

// prompt 사용 (사용자에게 값을 입력받아 활용하는 예시)
//사용자에게 입력받은 값은 문자열로 저장되기 때문에, Number로 강제 형 변환(숫자형)을 시켜 점수들을 더하고 나누는 수식을 통해 값을 구해줌.
let mathScore2 = Number(prompt("수학 점수를 입력하세요."));
let engScore2 = Number(prompt("영어 점수를 입력하세요."));

let avgScore2 = (mathScore2 + engScore2) / 2;
console.log(avgScore2);

//mathScore2 가 제대로 변했는지 확인해보기.
console.log("mathScore2", mathScore2, typeof mathScore2);

alert(`당신의 평균 점수는 ${avgScore2}입니다!`); //백틱 이용해서 템플릿 리터럴로 점수를 알려줌.

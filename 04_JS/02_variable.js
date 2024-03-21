console.log("connected!");

// 변수 선언하고 사용하기
/*
    var 키워드
    1. 변수 선언 -> 값 할당
    2. 변수 선언과 값 할당을 동시에
*/
// 변수 선언
var varName; // undefined
// 변수 값 할당
varName = "eunji";
console.log(varName);

// 변수 재할당
varName = "kim"; // varName 변수의 값이 "eunji" -> "kim" 변경
console.log(varName); // kim 출력

// 변수 선언과 값 할당을 동시에
var varName2 = "eunji2";
console.log(varName2);

// var의 이상한 점
// 1. 변수를 동일한 이름으로 재선언할 수 있음.
var varName = "jinjoo";
console.log(varName); // jinjoo를 출력
// 2. 변수를 선언하기 전 값을 할당할 수 있음
// 장점같아 보일 수 있으나, 유지보수 할 때 최악임
aa = 123;
console.log(aa);

/*
let 키워드
1. 변수 선언 -> 값 할당
2. 변수 선언과 값 할당을 동시에
*/
// 변수 선언
let letName;
// 값 할당
letName = "홍길동";
console.log(letName);

// 변수 선언과 값 할당을 동시에
let letName2 = "심청이";
console.log(letName2);

// let letName2 = "심봉사"; // error : 중복 선언 불가
// console.log(letName2);

//값 재할당은 가능!
letName2 = "심봉사";

/* 
const 키워드
- 반드시 변수 선언과 값 할당이 동시에 이뤄져야 함.
- 변수 재선언, 재할당 불가능.
- 사용처 : 변하지 않는 값을 변수에 저장할 때 사용함.
*/
// const constName; //선언과 동시에 값 할당이 필요
const constName = "kimeunji";
console.log(constName); //kimeunji

/*
    정리
    - var : es6 이전에 사용되던 변수 선언 키워드 -> 사용 지양하자!
    - let : 변수(바뀔 수 있는) 선언 키워드
        - 변수 선언 -> 값 할당
        - 변수 중복 선언은 불가능
        - 변수 재할당은 가능 (값을 수정할 수 있음)
    -const : 상수(바뀔 수 없는) 선언 키워드
        - 상수 : 변하지 않는 값
        - 변수 선언과 값 할당을 동시에 해야 함
        - 재선언, 재할당 불가능


    식별자 규칙
    : 이름을 지정할 때 사용하는 단어 (변수명,함수명 등)
    - 키워드 사용 불가
        - 키워드 : 특별한 역할을 이미 하고 있는 단어
        - ex) var, let, const, if, function, for, return, ...
    - 숫자로 시작 불가
    - 특수문자는 '_', '$' 기호만 허용
    - 공백 문자 사용 불가

    사용 가능한 식별자
    kimeunji, sweet123, my_name, money$, menu_bar, a, myName
    사용 불가능한 식별자
    var, let, const, 1st, *star, my name
*/

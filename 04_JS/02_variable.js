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

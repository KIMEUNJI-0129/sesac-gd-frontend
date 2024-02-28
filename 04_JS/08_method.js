// **문자열**에서 사용 가능한 속성과 메소드
// ()가 있으면 속성 없으면 메소드

// length, toUpperCase(), toLowerCase(), trim(), split()
// indexOf(), replace(), replaceAll(), slice(), repeat()
// 지금까지는 우리가 직접 함수를 만들어 사용
// 메서드는 자바스크립트에서 만들어 놓은 함수 -> 그래서 뒤에 괄호가 붙음
// 즉, 이미 정의가 되어 있으므로 가져다 사용하면 됨

let str = 'Strawberry Moon';
let str2 = '   Strawberry Moon   ';

// -----------------문자열 인덱싱
console.log(str[1]); // t
console.log(str[0]); // s -> 컴퓨터는 숫자를 0부터 시작
console.log(str[0] + str[3]); // Sa
// Sonny 출력
console.log(str[0] + str[12] + str[14] + str[14] + str[9]);

// -----------------length -> ()없어서 속성!
// 문자열의 길이를 반환 (공백 포함)
console.log('str 문자열의 길이', str.length); //15
console.log('str2 문자열의 길이', str2.length); //21 (공백 포함)

// -----------------인자가 없는 메소드 : XX.method() 형태
// - toUpperCase() : 모두 대문자로 반환
// - toLowerCase() : 모두 소문자로 반환
// - trim() : 양끝 공백 제거
let msg = 'Happy Birthday~';
let userId = '            user123';
console.log(msg.toUpperCase()); // HAPPY BIRTHDAY~
console.log(msg.toLowerCase()); // happy birthday
console.log(userId.length); // 19 -> 공백 잘리기 전의 문자열 길이 확인
console.log(userId.trim()); // user123 -> 공백 제거
console.log(userId.trim().length); // 7 -> 공백 제거되었는지 확인

// 메서드 체이닝
// 메서드를 연달아 사용 가능
// userId의 양 끝 공백을 제거하고, 모두 대문자로 변환 후 길이 반환
console.log(userId.trim().toUpperCase().length);

// ----------------인자 있는 메서드 : XX.method(arg) 형태
// - indexOf('원하는 문자') : 문자열에서 인자로 받은 문자열의 인덱스를 반환, 없다면 -1 반환
// - charAt(n) : 인자로 받은 숫자 n 인덱스 번호에 대한 문자열 하나 반환
// - replace(교체될 값, 대신 들어갈 값) : 교체될 값의 문자를 대신 들어갈 값으로 변환 -> 제일 처음에 만난 문자만 변환
// - replaceAll(교체될 값, 대신 들어갈 값) : 해당하는 모든 문자 교체
// - slice(startIdx[,endIdx]) : startIdx ~ endIdx-1 까지 자름 (음수 인덱스 가능:-1도 가능:뒤에서부터 세는 것)
// - repeat(n) : 문자열을 n번 반복
// - split() : 인자로 받은 문자열을 기준으로 해당 문자열을 나누고, 나눈 문자열을 배열로 만들어 반환
let fruit = 'applemango';

// indexOf
console.log(fruit.indexOf('apple')); // 0
console.log(fruit.indexOf('mango')); // 5
console.log(fruit.indexOf('e')); // 4
console.log(fruit.indexOf('z')); // -1

// charAt
console.log(fruit.charAt(8)); // g
console.log(fruit.charAt(5)); // m
console.log(fruit[5]); // m

// slice
console.log(fruit.slice(5)); // 5번째 인자부터 모든 인자를 출력 -> mango
console.log(fruit.slice(3, 6)); // 3~6번째 인자를 출력 -> lem
console.log(fruit.slice(-1)); // 가장 마지막 인자 출력 -> o
console.log(fruit.slice(-3)); // 가장 마지막에서부터 3만큼의 인자 출력 -> ngo
console.log('fruit의 값에 변화가 있는지 확인', fruit); // fruit라는 값에는 변화가 없음!
// 계속 사용하는 값일 경우에는 변수로 따로 저장해주어야 한다.

let msg2 = "Wow! It's so amazing!!! Wow!";

// repalce
console.log(msg2.replace('Wow!', 'Oh!')); // Oh! It's so amazing!!! Wow! -> 첫번째 Wow!만 변환
console.log(msg2.replaceAll('Wow!', 'Oh!')); // Oh! It's so amazing!!! Oh! -> 모두 변환
console.log('msg2 값에 변화가 있는지 확인!', msg2); // msg2라는 값에는 변화가 없음!
// 계속 사용하는 값일 경우에는 변수로 따로 저장해주어야 한다.

// ----------------Quiz
// 2024.02.28 -> 2024-02-28 바꾸기
let date = '2024.02.28';
console.log(date.replaceAll('.', '-'));
console.log('2024.02.28'.replaceAll('.', '-'));

// repeat
console.log('HelloWorld'.repeat(5));

// split : 배열(array)로 반환
console.log(date.split('.')); // 인자로 받은 문자열을 기준으로 나누어 배열로 반환 -> ['2024', '02', '28']
console.log(date.split('')); // 모든 글자를 하나씩 나누어 배열로 반환 -> ['2', '0', '2', '4', '.', '0', '2', '.', '2', '8']
let splitedDate = date.split('.'); // ['2024', '02', '28']
console.log(typeof splitedDate); // object

// ------------------------------------------------------

// **배열**에서 사용 가능한 속성과 메서드
// push, pop, unShift, shift, indexOf, reverse, lenth, includes
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'panda', 'dog', 'capybara'];

arr1[5] = 6;
console.log(arr1);
arr1[7] = 8; // 중간에 빈 값(empty) 생길 수 있음
console.log(arr1); // [1, 2, 3, 4, 5, 6, 비어 있음, 8]

arr1 = [1, 2, 3, 4, 5]; // 재선언

// push() : 배열의 가장 마지막에 해당 요소 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1); // [1, 2, 3, 4, 5, 10, 20, 30] -> arr1 변수의 배열 자체에 변화가 생김

// pop() : 배열의 가장 마지막 요소를 제거 -> 인자를 적지 않음
arr1.pop();
console.log(arr1); // [1, 2, 3, 4, 5, 10, 20] -> 맨 뒤부터 하나씩 사라짐.

// unShift() : 맨 앞에 요소 추가
arr2.unshift('bear');
console.log(arr2); // ['bear', 'quakka', 'panda', 'dog', 'capybara']

// shift() : 맨 앞 요소 제거 -> 인자를 적지 않음
arr2.shift();
console.log(arr2);

// push, pop, unShift, shift -> 문자열에서 메서드를 사용한 것과 다르게 원래의 배열 자체가 변경됨!!

// includes() : 해당 배열에 인자로 받은 값과 동일한 요소가 있는지 확인 후 t/f 를 반환
console.log(arr2.includes('quakka')); // true

// indexOf() : 문자열과 마찬가지로 해당 요소의 인덱스를 반환
console.log(arr2.indexOf('capybara')); // 3 -> bear가 shift 때문에 사라진 상태!

// length : 속성이므로 () 작성 X
console.log(arr2.length); // 4

// reverse() : 배열의 순서를 뒤집음 -> 배열을 변경시킴
arr2.reverse();
console.log(arr2);

// join() : 배열을 인자의 문자열 기준으로 합쳐 문자열로 반환
// 원래 배열을 변경시키지 않음
console.log(arr2);
console.log(arr2.join()); // 인자를 작성하지 않으면 배열 안의 콤마(,)까지 문자열로 변환
console.log(typeof arr2.join());
console.log(arr2.join('')); // 빈 문자열 작성 시 모든 요소가 붙어서 문자열로 변환
console.log(arr2.join(' 그리고 ')); // 문자 사이에 '그리고' 를 삽입해서 문자열로 반환

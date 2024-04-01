// 1. 전개 구문 (spread)

// 1-1. 배열
const lunchMenu = ['국밥', '치킨마요', '파스타', '돈까스'];
const dinnerMenu = ['라면', '볶음밥', '바질페스토파스타', '냉동볶음밥'];

console.log(lunchMenu);
console.log(dinnerMenu);
console.log(lunchMenu, dinnerMenu);

// 반복문으로 요소 하나씩 접근 가능
// for문
console.log('1. for 문');
for (let i = 0; i < lunchMenu.length; i++) {
  console.log(lunchMenu[i]);
}

// forEach는 인자를 하나씩 꼭꼭 찍고 가는 함수 인자로 콜백함수를 가진다.
console.log('2. forEach 문');
lunchMenu.forEach((menu) => {
  console.log(menu);
});

// map
console.log('3. map 문');
lunchMenu.map((menu) => {
  console.log(menu);
});

// for
console.log('4. for 문2');
for (let menu of lunchMenu) {
  console.log(menu);
}

// 전체 요소에 접근하고 싶은 경우
// 연산(계산) 등이 필요한 작업이 아닌 경우
// 전개 연산자 사용 -> 일일이 요소에 접근하지 않고 사용할 수 있도록 함
console.log(...lunchMenu);
console.log(...[1, 2, 3, 4, 5]); // 꼭 변수에 저장하지 않아도 배열에 바로 사용 가능

// 배열 합치기
// ['국밥', '치킨마요', '파스타', '돈까스', '라면', '볶음밥', '바질페스토파스타', '냉동볶음밥']

console.log(...lunchMenu, ...lunchMenu);

const combineArray = lunchMenu.concat(dinnerMenu);
console.log(combineArray);

const newArr = [];

function usePush() {
  lunchMenu.map((menu) => newArr.push(menu));
  dinnerMenu.map((menu) => newArr.push(menu));
}

usePush();
console.log(newArr);

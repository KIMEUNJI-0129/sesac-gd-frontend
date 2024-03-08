// 함수 내보내는 방법
// 1. 함수 앞에 export 키워드 작성

// export function consoleName(name) {
//   console.log(`당신의 이름은 ${name}입니다`);
// }

// export function consoleName2(name) {
//   console.log(`당신의 이름은 ${name} 222`);
// }

// default 키워드 작성 시 해당 함수가 이 파일의 대표 함수가 됨.
// export default function consoleNameMain(name) {
//   console.log(`당신의 이름은 ${name} Main`);
// }

// 2. 마지막에 모아서 export문 작성
function consoleName(name) {
  console.log(`당신의 이름은 ${name}입니다`);
}

function consoleName2(name) {
  console.log(`당신의 이름은 ${name} 222`);
}

function consoleNameMain(name) {
  console.log(`당신의 이름은 ${name} Main`);
}

// 한번에 내보내기!
export { consoleName, consoleName2 };

// 다른 JS 파일의 함수나 변수를 불러와 사용하기
// import, export문
// export문 : 함수 내보내기
// import문 : 함수 불러오기
// 불필요한 코드 반복을 줄이고, 효율적인 개발 가능, 유지 보수 쉬워짐

// 함수 불러오기
// export 키워드만 작성한 경우 중괄호{}에 감싸서 작성
import { consoleName, consoleName2 } from './02_util.js'; // 나 이 함수 불러올거야! 하는 뜻
// export default 작성 시 중괄호{} 감싸지 않고 불러옴!
// import consoleNameMain from './02_util.js';

// 한 줄로 default 함수와 다른 함수들도 불러올 수 있음.
// import consoleNameMain, { consoleName, consoleName2 } from './02_util.js';

consoleName('eunji');
consoleName2('eunji');
consoleNameMain('eunji');

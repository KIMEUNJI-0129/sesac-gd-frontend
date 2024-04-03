// package.json "type": "module"로 수정 필요

// ------------------------------------------------

// 02_module01.js 사용
// import { flowers, getFlower, getFlowersLength } from './02_module01.js';

// console.log(flowers);
// getFlowersLength(); // 함수에서 이미 console을 찍기 때문에 그냥 부르기만 해도 됨!
// console.log(getFlower(0));
// console.log(getFlower(10));

// 한 번에 export 한 변수 함수 등을 가져오는 방법
// *을 사용해 한 번에 가져오는 방법은 메모리 효율, 처리 속도 측면에서 좋지 않음
import * as flower from './02_module01.js';

console.log(flower);

// --------------------------------------------------

// 02_module02.js 사용
import { animals, addAnimal, showAnimals } from './02_module02.js';
import sayStatus2 from './03_module.js';

showAnimals(); // 함수에서 이미 console을 찍기 때문에 그냥 부르기만 해도 됨!
console.log(addAnimal('horse'));

// -------------------------------------------------

// 03_module.js 사용
// import sayStatus from './03_module.js';

// sayStatus('sleepy');
// sayStatus('hungry');
// sayStatus('happy');

// 한 번에 내보낸 sayStatus2 사용

sayStatus2('sleepy');
sayStatus2('hungry');
sayStatus2('happy');

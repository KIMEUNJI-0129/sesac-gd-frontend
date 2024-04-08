import React, { Component, useState } from 'react';

// 클래스형 컴포넌트로 실습
// export default class Prac1 extends Component {
//   // number를 0으로 초기화해주기.
//   state = {
//     Number: 0,
//   };

//   render() {
//     const { number } = this.state;
//     return (
//       <>
//         <h1>{number}</h1>
//         <button
//           onClick={() => {
//             this.setState({ number: number + 2 });
//           }}
//         >
//           + 2
//         </button>
//         <button
//           onClick={() => {
//             this.setState({ number: number - 1 });
//           }}
//         >
//           - 1
//         </button>
//       </>
//     );
//   }
// }

//---------------------------------------------------

// 함수형 컴포넌트에서 useState hook을 통해 state 사용 실습

// import { useState } from 'react';

// export default function Prac1() {
//   const [number, setNumber] = useState(0); // 초기값을 0으로 만들어 주는 방법

//   const increase = () => {
//     setNumber(number + 1);
//   };
//   const decrease = () => {
//     setNumber(number - 2);
//   };

//   return (
//     <>
//       <h2>함수형 컴포넌트 이용하기</h2>
//       <h2>
//         {number} {number < 7 ? '💛' : '💔'}
//       </h2>

//       <button onClick={increase}> + 1 </button>
//       <button onClick={decrease}> - 2 </button>
//     </>
//   );
// }

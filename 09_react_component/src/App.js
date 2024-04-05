import './App.css';
import ClassComponent from './components/ClassComponent';
import FuctionComponent from './components/FunctionComponent';
import Prac from './components/Prac';

function App() {
  return (
    <div className="App">
      {/* 불러 와 사용하는 방법 1 */}
      <ClassComponent></ClassComponent>
      {/* 불러 와 사용하는 방법 2 */}
      <ClassComponent />

      {/* 함수형 컴포넌트 */}
      <FuctionComponent></FuctionComponent>
      <FuctionComponent />

      {/* Prac 불러오기 */}
      <Prac></Prac>
    </div>
  );
}

export default App;

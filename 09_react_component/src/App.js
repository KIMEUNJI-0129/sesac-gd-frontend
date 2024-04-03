import './App.css';
import ClassComponent from './components/ClassComponent';
import FuctionComponent from './components/FunctionComponent';

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
    </div>
  );
}

export default App;

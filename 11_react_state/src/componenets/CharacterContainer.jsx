import { useState } from 'react';
import CharacterInfo from './CharacterInfo';

export default function CharacterContainer() {
  // 캐릭터의 상태가 배열로 들어가 있고, 배열 안에 요소는 객체로 들어가 있음.
  // 객체 안에는 사용자의 정보(id,name,age,nickName)가 들어가 있다.
  // 사용자의 데이터가 담긴 객체의 배열
  const [character, setCharacter] = useState([
    {
      id: 1,
      name: '뽀로로',
      age: '7',
      nickName: '사고뭉치',
    },
    {
      id: 2,
      name: '루피',
      age: '5',
      nickName: '공주님',
    },
    {
      id: 3,
      name: '크롱',
      age: '4',
      nickName: '장난꾸러기',
    },
  ]);

  // 선택된 캐릭터의 정보가 저장될 state가 필요함.
  // selectedCharacter state 선언
  // 선택된 캐릭터의 정보를 객체 형태로 저장할 에정
  // 하지만 조건 중에서 선택된 캐릭터가 없을 때, CharacterInfo 컴포넌트를
  // 렌더링 하지 말라는 조건이 있으므로, 초기값을 null로 준다.
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // handleClick 함수 (인자: 선택된 버튼의 name 값)
  // characters 배열에서 인자로 받은 name의 값과 동일한 요소를
  // selectedCharacter state에 저장
  const handleClick = (name) => {
    const selected = character.find((character) => character.name === name);
    setSelectedCharacter(selected);
  };

  return (
    <div>
      {/* characters 배열 순회하며 버튼 렌더링 하기 */}
      {character.map((character) => (
        <button key={character.id} onClick={() => handleClick(character.name)}>
          {character.name}
        </button>
      ))}

      {/* 선택된 캐릭터 정보를 props로 전달하기 */}
      {/* selectedCharacter state의 값이 없는 경우, CharacterInfo 컴포넌트 렌더링 X */}
      {/* 앞이 false가 되면 뒤에거는 실행조차 하지 않기 때문에! selectedCharacter가 없으면 뒤에거는 실행 안 됨 */}
      {/* && 연산자이기 때문에 둘다 true여야지 실행되기 때문에 ! */}
      {selectedCharacter && <CharacterInfo characterInfo={selectedCharacter} />}
    </div>
  );
}

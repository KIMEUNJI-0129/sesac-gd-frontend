export default function FoodProps(props) {
  return (
    <>
      {/* 실습1 좋아하는 음식 */}
      <h1>내가 좋아하는 음식을 소개합니다!</h1>
      <div className="foodName">내가 좋아하는 음식은 {props.food}</div>
    </>
  );
}

FoodProps.defaultProps = {
  food: '쌀국수',
};

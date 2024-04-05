export default function Prac() {
  const helloStr = 'Hello, this is first practice';

  const handleClick2 = () => {
    alert('클릭!');
  };

  return (
    <div
      style={{ marginTop: 32, backgroundColor: 'pink' }}
      onClick={handleClick2}
    >
      인삿말 : {helloStr}
    </div>
  );
}

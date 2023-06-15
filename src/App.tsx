import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const addNum = () => {
    const tempNum = num;
    setNum(tempNum + 1);
  };
  return (
    <div>
      <div>{num}</div>
      <button onClick={addNum}>点击+1</button>
    </div>
  );
}

export default App;

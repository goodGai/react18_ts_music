import React, { useState } from 'react';

const Home = () => {
  const [num, setNum] = useState(0);
  const addNum = () => {
    const temp = num;
    setNum(temp + 1);
  };
  return (
    <div>
      <p>hahah</p>
      <div>{num}</div>
      <button onClick={addNum}>点击+1</button>
    </div>
  );
};

export default Home;

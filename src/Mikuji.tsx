import React, { useState } from 'react';

const Omikuji = () => {
  const [result, setResult] = useState('');
  const fortunes = ['大吉', '中吉', '小吉', '凶', '大凶', '超凶', '即死', '超吉'];

  const drawFortune = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setResult(randomFortune);
  };

  return (
    <div>
      <h3>普通おみくじ</h3>
      <button onClick={drawFortune}>おみくじを引く</button>
      {result && <p>今日の運勢: {result}</p>}
    </div>
  );
};

export default Omikuji;

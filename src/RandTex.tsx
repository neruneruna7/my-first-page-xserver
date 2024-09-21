import React, { useState, useEffect } from 'react';
import './RandTex.css';

const RandomText= () => {
  const [text, setText] = useState('');

  const text_set = ["あ", "い"];
  const genText = async () => {
    // ランダムで生成
    let buf = "";
    for (let i = 0; i<4; i++) {
        buf += text_set[Math.floor(Math.random() * text_set.length)];
    }
    setText(buf);
  };

  useEffect(() => {
    genText();
  }, []);

  return (
    <div>
      <h3>ランダムテキストおみくじ（）</h3>
      <button onClick={genText}>おみくじを引く</button>
      <h1 className={"flashy-text"}>{text}</h1>
    </div>
  );
};

export default RandomText;

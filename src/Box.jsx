import { useState } from 'react';

export default function Box({ color, colors }) {
  const width = '70px';
  const height = '70px';

  const [actualColor, setActualColor] = useState(color);

  const clickBox = () => {
    console.log('clicou');
    setActualColor(colors.at(Math.floor(Math.random() * colors.length)));
  };

  return (
    <div
      onClick={clickBox}
      className="box"
      style={{ width: width, height: height, backgroundColor: actualColor }}
    ></div>
  );
}

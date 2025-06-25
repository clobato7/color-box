import { useState } from 'react';

export default function Box({ color, colors }) {
  const [actualColor, setActualColor] = useState(color);

  const clickBox = () => {
    // console.log('clicou');
    setActualColor(() => {
      let c = actualColor;
      while (actualColor === c) {
        c = colors.at(Math.floor(Math.random() * colors.length));
        // console.log(`${actualColor} => ${c}`);
      }
      return c;
    });
  };

  return <div onClick={clickBox} className="box" style={{ backgroundColor: actualColor }}></div>;
}

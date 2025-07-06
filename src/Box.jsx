import { useState } from 'react';

export default function Box({ color /*, colors*/, onClick }) {
  // const [actualColor, setActualColor] = useState(color);

  // const clickBox = () => {
  //   // console.log('clicou');
  //   setActualColor(() => {
  //     let c = actualColor;
  //     while (actualColor === c) {
  //       c = colors.at(Math.floor(Math.random() * colors.length));
  //       // console.log(`${actualColor} => ${c}`);s
  //     }
  //     return c;
  //   });
  // };

  return (
    <div
      /*onClick={clickBox}*/ onClick={onClick}
      className="box"
      style={{ backgroundColor: color }}
    ></div>
  );
}

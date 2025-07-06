import Box from './Box';
import { data } from './data/data.js';
import { useState } from 'react';

export default function Boxes({ x, y }) {
  // const colors = ['#39FF14', '#FF3131', '#00FFFF', '#FF6EC7', '#FFFF33'];
  const colors = data.map((item) => item.color);

  const pickColor = () => colors.at(Math.floor(Math.random() * colors.length));

  const generateGridColors = () => {
    const matrix = [];

    for (let row = 0; row < y; row++) {
      let axisX = [];
      for (let col = 0; col < x; col++) {
        axisX.push(pickColor());
      }
      matrix.push(axisX);
    }

    return matrix;
  };

  const [gridColors, setGridColors] = useState(generateGridColors);
  // console.log(gridColors);

  const changeColor = (i, j) => {
    console.log(`clicou no ${i} e ${j}`);

    const actualColor = gridColors[i][j];
    const otherColors = colors.filter((c) => c !== actualColor);
    const newColor = otherColors[Math.floor(Math.random() * otherColors.length)];

    const newGrid = gridColors.map((row, rowIndex) => {
      if (rowIndex === i) {
        return row.map((col, colIndex) => {
          return colIndex === j ? newColor : col;
        });
      }
      return row;
    });

    setGridColors(newGrid);

    // se todas as cores são iguais
    // ToDo: colocar aqui a zerada de acordo com a cor que foi feita nos quadros
    if (newGrid.every((row) => row.every((color) => color === newGrid[0][0]))) {
      alert('🎉 WIN WIN WIN!');
    }
  };

  function renderBoxes() {
    const boxesColors = [];
    for (let i = 0; i < y; i++) {
      let columns = [];
      for (let j = 0; j < x; j++) {
        columns.push(
          <Box
            key={`i${i}-j${j}`}
            color={gridColors[i][j]}
            colors={colors}
            onClick={() => changeColor(i, j)}
          />
        );
      }
      boxesColors.push(
        <div key={`i${i}`} className="row">
          {columns}
        </div>
      );
    }
    // console.log(boxesColors);
    return boxesColors;
  }

  return <>{renderBoxes()}</>;
}

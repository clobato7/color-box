import Box from './Box';

export default function Boxes({ x, y }) {
  const colors = ['#39FF14', '#FF3131', '#00FFFF', '#FF6EC7', '#FFFF33'];
  const pickColor = () => colors.at(Math.floor(Math.random() * colors.length));

  function renderBoxes() {
    const boxesColors = [];
    for (let i = 1; i <= y; i++) {
      let columns = [];
      for (let j = 1; j <= x; j++) {
        columns.push(<Box key={`i${i}-j${j}`} color={pickColor()} colors={colors} />);
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

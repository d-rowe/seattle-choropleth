import React from 'react';

const Tooltip = ({ info, x, y, width, height, show }) => {
  const tip = show ? (
    <foreignObject x={x} y={y} width={width} height={height} className='tip'>
      <div className='tip'>
        <h1>{info}</h1>
      </div>
    </foreignObject>
  ) : null;
  return(tip);
};

export default Tooltip;

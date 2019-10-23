import React from 'react';
import '../styles/components/tooltip.css';

const Tooltip = ({ info, x, y, width, height, show }) => {
  const tip = show ? (
    <foreignObject x={x} y={y} width={width} height={height} className='tip'>
      <div className='tip'>
        <p className='tip-info'>{info}</p>
      </div>
    </foreignObject>
  ) : null;
  return tip;
};

export default Tooltip;

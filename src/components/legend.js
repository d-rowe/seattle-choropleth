import React from 'react';
import '../styles/components/legend.css';

const Legend = colorRange => {
  const y = -1100;
  const x = 150;
  colorRange = colorRange.colorRange;
  const domain = colorRange.domain();
  const dLength = domain.length;
  const w = 700 / dLength;

  const rects = domain.map((n, i) => {
    return (
      <rect
        width={w + 1}
        x={i * w + x}
        height={40}
        y={y}
        key={i}
        fill={colorRange(n)}
        className='animate legend-color'
      />
    );
  });
  const labels = [domain[0], domain[dLength - 1]].map((n, i) => {
    return (
      <text
        x={i * w * dLength - w / 2 + x}
        y={y + 90}
        key={i}
        className='legend-label'
      >
        {Math.round(n)}
      </text>
    );
  });

  return (
    <g className='legend'>
      {rects}
      {labels}
    </g>
  );
};

export default Legend;

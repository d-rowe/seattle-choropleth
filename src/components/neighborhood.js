import React from 'react';
import '../styles/components/neighborhood.css';

const Neighborhood = ({ path, properties, color }) => {
  return (
    <path
      d={path}
      fill={color}
      className="neighborhood"
      onClick={() => console.log(properties.MEDIAN_AGE)}
    />
  );
};

export default Neighborhood;

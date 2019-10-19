import React from 'react';
import '../styles/components/neighborhood.css';

const Neighborhood = ({ path, properties, colorRange }) => {
  return (
    <path
      d={path}
      fill={colorRange(properties.MEDIAN_AGE)}
      className="neighborhood"
      onClick={() => console.log(properties.MEDIAN_AGE)}
    />
  );
};

export default Neighborhood;

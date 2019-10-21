import React from 'react';
import * as d3 from 'd3';
import geojson from '../geojson/census.geojson';
import Neighborhood from './neighborhood';
import '../styles/components/map.css';

// TODO Add captioned scale (legend)
class Map extends React.Component {
  state = {
    censusEntry: 'MEDIAN_AGE',
    dataRange: [15, 55],
    neighborhoods: null,
    viewBox: null
  };

  componentDidMount() {
    // TODO Set range based on selected feature property (put logic in utils)
    this.setHoods();
  }

  setViewBox() {
    const bBox = this.refs.mapSvg.getBBox();
    this.setState({
      viewBox: `${bBox.x} ${bBox.y} ${bBox.width} ${bBox.height}`
    });
  }

  setHoods() {
    let projection = d3
      .geoAlbers()
      .scale(500000)
      .rotate([122.3321, 0])
      .center([0, 47.6062]);

    let path = d3.geoPath().projection(projection);

    d3.json(geojson).then(data => {
      // TODO Use multicolor scale
      const colorRange = d3
        .scaleQuantile()
        .domain(d3.range(...this.state.dataRange))
        .range(d3.schemeGnBu[9]);

      // Map features to Neighborhood components
      let neighborhoods = data.features.map((feature, i) => {
        const properties = feature.properties;
        const color = colorRange(properties[this.state.censusEntry]);
        return (
          <Neighborhood
            path={path(feature)}
            properties={properties}
            color={color}
            key={i}
          />
        );
      });
      this.setState({ neighborhoods });
      this.setViewBox();
    });
  }

  render() {
    return (
      <svg viewBox={this.state.viewBox} className="mapSvg" ref="mapSvg">
        <g className="neighborhoods">{this.state.neighborhoods}</g>
      </svg>
    );
  }
}
export default Map;

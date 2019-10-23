import React from 'react';
import * as d3 from 'd3';
import geojson from '../geojson/census.geojson';
import Neighborhood from './neighborhood';
import propertyRanges from '../utils/propertyRanges';
import anime from 'animejs';
import '../styles/components/map.css';
import { connect } from 'react-redux';

// TODO Add captioned scale (legend)
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhoods: null,
      viewBox: null
    };
  }

  componentDidMount() {
    d3.json(geojson).then(j => {
      this.djson = j;
      this.setState({ propertyRanges: propertyRanges(j) });
      this.draw();
    });
  }

  setViewBox() {
    const tPadding = 110;
    const bBox = this.refs.mapSvg.getBBox();
    this.setState({
      viewBox: `${bBox.x} ${bBox.y - tPadding} ${bBox.width} ${bBox.height +
        tPadding}`
    });
  }

  animate() {
    anime({
      targets: '.npath',
      scale: [0, 1],
      easing: 'spring',
      delay: anime.stagger(15)
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.draw();
    }
  }

  draw() {
    let projection = d3
      .geoAlbers()
      .scale(500000)
      .rotate([122.3321, 0])
      .center([0, 47.6062]);

    let path = d3.geoPath().projection(projection);

    const colorRange = d3
      .scaleQuantile()
      .domain(d3.range(...this.state.propertyRanges[this.props.entry]))
      .range(d3.schemeGnBu[9]);

    // Map features to Neighborhood components
    let neighborhoods = this.djson.features.map((feature, i) => {
      const properties = feature.properties;
      const color = colorRange(properties[this.props.entry]);
      return (
        <Neighborhood
          path={path(feature)}
          data={properties[this.props.entry]}
          color={color}
          key={i}
        />
      );
    });
    const initialDraw = this.state.viewBox === null;
    this.setState({ neighborhoods });
    this.setViewBox();
    initialDraw && this.animate();
  }

  render() {
    return (
      <div className='map-container'>
        <svg viewBox={this.state.viewBox} className='map-svg is-centered' ref='mapSvg'>
          <g className='neighborhoods' ref='neighborhoods'>
            {this.state.neighborhoods}
          </g>
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { entry: state.entry };
};

export default connect(mapStateToProps)(Map);

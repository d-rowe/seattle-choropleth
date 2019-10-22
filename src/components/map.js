import React from 'react';
import * as d3 from 'd3';
import geojson from '../geojson/census.geojson';
import Neighborhood from './neighborhood';
import entryRanges from '../utils/entryRanges';
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
    // TODO Set range based on selected feature property (put logic in utils)
    entryRanges.then(r => {
      this.setState({ dataRanges: r });
      this.setHoods();
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
      opacity: [0, 1],
      easing: 'linear',
      delay: anime.stagger(4)
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      // this.clear();
      this.setHoods();
    }
  }

  clear() {
    const nNode = this.refs.neighborhoods;
    while (nNode.firstChild) {
      nNode.removeChild(nNode.firstChild);
    }
  }

  setHoods() {
    let projection = d3
      .geoAlbers()
      .scale(500000)
      .rotate([122.3321, 0])
      .center([0, 47.6062]);

    let path = d3.geoPath().projection(projection);

    d3.json(geojson).then(data => {
      const colorRange = d3
        .scaleQuantile()
        .domain(d3.range(...this.state.dataRanges[this.props.entry]))
        .range(d3.schemeGnBu[9]);

      // Map features to Neighborhood components
      let neighborhoods = data.features.map((feature, i) => {
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
    });
  }

  render() {
    return (
      <div className='map-container'>
        <svg viewBox={this.state.viewBox} className='map-svg' ref='mapSvg'>
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

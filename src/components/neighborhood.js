import React from 'react';
import Tooltip from './tooltip';
import { select } from 'd3';
import '../styles/components/neighborhood.css';

class Neighborhood extends React.Component {
  state = { hovered: false, center: { x: 0, y: 0 } };
  componentDidMount() {
    this.center();
  }

  center() {
    const { x, y, width } = this.refs.npath.getBBox();
    this.setState({ center: { x: x + width / 2 - 150, y: y - 70 } });
  }

  render() {
    return (
      <g ref='neighborhood'>
        <path
          ref='npath'
          d={this.props.path}
          fill={this.props.color}
          className='npath'
          onClick={() => console.log(this.props.properties.MEDIAN_AGE)}
          onMouseOver={() => {
            this.setState({ hovered: true });
            select(this.refs.neighborhood).raise();
          }}
          onMouseLeave={() => {
            this.setState({ hovered: false });
          }}
        />
        <Tooltip
          info={this.props.properties.MEDIAN_AGE + ' years old'}
          x={this.state.center.x}
          y={this.state.center.y}
          height={60}
          width={300}
          show={this.state.hovered}
        />
      </g>
    );
  }
}

export default Neighborhood;

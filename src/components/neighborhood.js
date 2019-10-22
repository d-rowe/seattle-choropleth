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
    this.setState({ center: { x: x + width / 2 - 150, y: y - 110 } });
  }

  render() {
    return (
      <g ref='neighborhood'>
        <path
          ref='npath'
          d={this.props.path}
          fill={this.props.color}
          className='npath'
          onMouseOver={() => {
            this.setState({ hovered: true });
            select(this.refs.neighborhood).raise();
          }}
          onMouseLeave={() => {
            this.setState({ hovered: false });
          }}
        />
        <Tooltip
          info={this.props.data}
          x={this.state.center.x}
          y={this.state.center.y}
          height={80}
          width={300}
          show={this.state.hovered}
        />
      </g>
    );
  }
}

export default Neighborhood;

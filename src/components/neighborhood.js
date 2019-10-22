import React from 'react';
import { select } from 'd3';
import '../styles/components/neighborhood.css';

class Neighborhood extends React.Component {
  state = { hovered: false };
  componentDidMount() {
    this.center();
  }

  center() {
    const { x, y, width } = this.refs.npath.getBBox();
    this.setState({ center: { x: x + width / 2 - 150, y: y - 70 } });
  }

  render() {
    const tip = this.state.hovered ? (
      <foreignObject
        x={this.state.center.x}
        y={this.state.center.y}
        width='300'
        height='50'
        className='tip'
      >
        <div className='tip'>
          <h1>{this.props.properties.MEDIAN_AGE + ' years old'}</h1>
        </div>
      </foreignObject>
    ) : null;

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
        {tip}
      </g>
    );
  }
}

export default Neighborhood;

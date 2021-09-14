import React from 'react';
//import Generation from './generation';

export default class EscherCircle extends React.Component {
  static defaultProps = { 
      generations: 8, 
      height: 600,
      color1: "#123456",
      color2: "#123456",
      color3: "#123456",
      color4: "#123456",
      colorvlinder: "#123456",
      colorcircle: "#123456"
    };

GenerateGenerations(){}
  render() {
    let radius =(this.props.height - 100)/2 ;
    return (
      <svg width={this.props.height} height={this.props.height}>
        <circle
          r={radius}
          cx={radius}
          cy={radius}
          fill={this.props.colorcircle}
        />
      </svg>
    )
  }
}

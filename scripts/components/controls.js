import React from 'react';
import { SketchPicker } from 'react-color';

export default class Controls extends React.Component {
  static defaultProps = { 
    color1: "#123456",
    color2: "#123456",
    color3: "#123456",
    color4: "#123456",
    colorvlinder: "#123456",
    colorcircle: "#123456"
  };

GenerateGenerations(){}
  render() {
    return (
        <div>
            <h1>Kleur cirkel</h1>
            <SketchPicker         
                onChangeComplete={ this.props.handleChangeColorCircle }
                color={this.props.colorcircle}
            />
        </div>
    )
  }
}

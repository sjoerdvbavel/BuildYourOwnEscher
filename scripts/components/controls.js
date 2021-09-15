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

  GenerateGenerations() { }
  render() {
    return (
      <div>
        <h1>Build your own Escher</h1>
        <div>
          <div className="row">
            <div className="cell-sm">
              <h3>Kleur vlinder</h3>
              <SketchPicker
                onChangeComplete={this.props.handleChangeColorVlinder}
                color={this.props.colorVlinder}
              />
            </div>
            <div className="cell-sm">
              <h3>Kleur 1</h3>
              <SketchPicker
                onChangeComplete={this.props.handleChangeColor1}
                color={this.props.color1}
              />
            </div>
          </div>
          <div className="row">
            <div className="cell-sm">
              <h3>Kleur 2</h3>
              <SketchPicker
                onChangeComplete={this.props.handleChangeColor2}
                color={this.props.color2}
              />
            </div>
            <div className="cell-sm">
              <h3>Kleur 3</h3>
              <SketchPicker
                onChangeComplete={this.props.handleChangeColor3}
                color={this.props.color3}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cell-sm">
            <h3>Kleur 4</h3>
            <SketchPicker
              onChangeComplete={this.props.handleChangeColor4}
              color={this.props.color4}
            />
          </div>
          <div className="cell-sm">
            <h3>Kleur cirkel</h3>
            <SketchPicker
              onChangeComplete={this.props.handleChangeColorCircle}
              color={this.props.colorcircle}
            />
          </div>
        </div>
      </div >
    )
  }
}

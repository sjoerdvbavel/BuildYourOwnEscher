import React from 'react';
import Graph from './components/graph'
import Controls from './components/controls';
import EscherCircle from './components/eschercircle';

export default class App extends React.Component {
  state = {
    dataSetIndex: 0,
    color1: "#123456",
    color2: "#123456",
    color3: "#123456",
    color4: "#123456",
    colorvlinder: "#123456",
    colorcircle: "#123456"
  };

  selectDataset(event) {
    this.setState({ dataSetIndex: event.target.value });
  }
  handleChangeColor1 = (color) => {
    console.log("Changed color1 to " + color.hex);
    this.setState({ color1: color.hex });
  }
  handleChangeColor2 = (color) => {
    console.log("Changed color2 to " + color.hex);
    this.setState({ color2: color.hex });
  }
  handleChangeColor3 = (color) => {
    console.log("Changed color3 to " + color.hex);
    this.setState({ color3: color.hex });
  }
  handleChangeColor4 = (color) => {
    console.log("Changed color4 to " + color.hex);
    this.setState({ color4: color.hex });
  }
  handleChangeColorVlinder = (color) => {
    console.log("Changed colorVlinder to " + color.hex);
    this.setState({ colorVlinder: color.hex });
  }
  handleChangeColorCircle = (color) => {
    console.log("Changed color circle to " + color.hex);
    this.setState({ colorcircle: color.hex });
  }

  render() {
    let options = this.props.datasets.map((_, index) => {
      return <option key={index} value={index}>Dataset {index + 1}</option>
    });

    return (
      <div className="p-3">
      <div className="Container">
        <div className="row">


        <EscherCircle 
          colorcircle={this.state.colorcircle} 
        />
        <Controls 
          colorcircle={this.state.colorcircle}
          handleChangeColor1 = {this.handleChangeColor1}
          handleChangeColor2 = {this.handleChangeColor2}
          handleChangeColor3 = {this.handleChangeColor3}
          handleChangeColor4 = {this.handleChangeColor4}
          handleChangeColorVlinder = {this.handleChangeColorVlinder}
          handleChangeColorCircle = {this.handleChangeColorCircle}
        />
        </div>
      </div>
      </div>
    )
  }
}

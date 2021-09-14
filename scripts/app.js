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
  handleChangeColorCircle = (color) => {
    console.log("test");
    this.setState({ colorcircle: color.hex });
  }

  render() {
    let options = this.props.datasets.map((_, index) => {
      return <option key={index} value={index}>Dataset {index + 1}</option>
    });

    return (
      <div>
      <div className="Container">
        <div className="row">


        <EscherCircle 
          colorcircle={this.state.colorcircle} 
        />
        <Controls 
          colorcircle={this.state.colorcircle} 
          handleChangeColorCircle = {this.handleChangeColorCircle}
        />
        </div>
      </div>
      </div>
    )
  }
}

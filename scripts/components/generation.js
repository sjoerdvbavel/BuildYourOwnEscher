import React from 'react';

export default class Generation extends React.Component {
    static defaultProps = {
        angle: 0,
        distance: 150,
        size: 50,
        originx: 200,
        originy: 200,
        color1: "#123456",
        color2: "#123456",
        color3: "#123456",
        color4: "#123456",
        colorvlinder: "#123456",
    };

    GenerateGenerations() { }
    render() {
        let radius = (this.props.height - 100) / 2;
        return (
            <Rect
                height = {size}
                width = {size * 0.5}
                fill = {color1.hex}
                style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)"
            />
        )
    }
}

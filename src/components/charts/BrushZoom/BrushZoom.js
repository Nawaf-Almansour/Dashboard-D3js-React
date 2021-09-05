import React from 'react';
import {
    VictoryChart,
    VictoryZoomContainer,
    VictoryScatter,
} from "victory";


function random(max, min) {
    return Math.random() * (max - min) + min;

}

function range(size) {
    return [...Array(size).keys()].map(i => i );

}

class BrushZoom extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        data: this.getScatterData()
    }

    getScatterData() {
        return range(50).map((index) => {
            return {
                x: random(1, 50),
                y: random(10, 90),
                size: random(8) + 3
            };
        });
    }

    render() {
        return (
            <div  style={{background: "rgb(249 232 232)", borderRadius: "8px" , padding: "30px 0px"}}
            >
            <VictoryChart
                domain={{y: [0, 100]}}
                containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [0, 100]}}/>}
            >
                <VictoryScatter
                    data={this.state.data}
                    style={{
                        data: {
                            opacity: ({ datum }) =>  datum.y % 5 === 0 ? 1 : 0.7,
                            fill: ({ datum }) => datum.y % 5 === 0 ? "tomato" : "black"
                        }
                    }}
                />
            </VictoryChart>
            </div>
        );
    }
}

export  default BrushZoom;
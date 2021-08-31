
import * as d3 from "d3";
import {useEffect, useRef} from 'react';

const RectangleChart = () => {
    const svgLegendRef = useRef(null);

    useEffect(() => {
        const w = 300;
        const h = 100;
        const padding = 2;
        const dataset = [ 5, 10, 13, 19, 21, 25,
            11, 25, 22, 18, 7];

        const svg = d3.select(svgLegendRef.current).append("svg")
            .attr("width", w)
            .attr("height", h);

        function colorPicker(v) {
            if (v<=20) { return "#666666"; }
            else if (v>20) { return "#FF0033"; }
        }

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {return i * (w / dataset.length);})
            .attr("y", function(d) {return h - (d*4);})
            .attr("width", w / dataset.length - padding)
            .attr("height", function(d) {return d*4;})
            .attr("fill", function(d) {return colorPicker(d);});

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) { return d; })
        .attr("text-anchor", "middle").
         attr( "x", function(d, i) {return i * (w / dataset.length)+(w / dataset.length - padding) / 2;}).
         attr( "y", function(d) { return h - (d*4)+14; })
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr ( "fill", "#ffffff")
    });
    return(<div ref={svgLegendRef}/>)

}


export default RectangleChart;
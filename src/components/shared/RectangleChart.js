
import * as d3 from "d3";
import {useEffect, useRef} from 'react';
// import dataJson from "../../data/MonthlySalesbyCategory.json"

const RectangleChart = () => {
    const svgLegendRef = useRef(null);
    let svg;

    useEffect(() => {
        const w = 300;
        const h = 100;
        const padding = 2;
        let dataset = [ 5, 10, 13, 19, 21, 25,
            11, 25, 22, 18, 7];

             svg = d3.select(svgLegendRef.current).append("svg")
                .attr("width", w)
                .attr("height", h)

        function colorPicker(v) {
                if (v <= 20) {
                    return "#666666";
                } else if (v > 20) {
                    return "#d90c44";
                }
            }

            svg.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("x", function (d, i) {
                    return i * (w / dataset.length);
                })
                .attr("y", function (d) {
                    return h - (d * 4);
                })
                .attr("width", w / dataset.length - padding)
                .attr("height", function (d) {
                    return d * 4;
                })
                .attr("fill", function (d) {
                    return colorPicker(d);
                });

            svg.selectAll("text")
                .data(dataset)
                .enter()
                .append("text")
                .text(function (d) {
                    return d;
                })
                .attr("text-anchor", "middle")
                .attr("x", function (d, i) {
                    return i * (w / dataset.length) + (w / dataset.length - padding) / 2;
                })
                .attr("y", function (d) {
                    return h - (d * 4) + 14;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", 13)
                .attr("fill", "#ffffff")
                .attr("font-weight","700")
                .attr("style" , " color:white");
    },[svg]);

    return(<div className='ms' style={{background: "rgb(12 182 101)", borderRadius: "8px" , padding: "30px 0px"} }  ref={svgLegendRef}/>)

}


export default RectangleChart;
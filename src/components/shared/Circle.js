
import * as d3 from "d3";
import {useEffect, useRef} from 'react';

const Circle = () => {
    const svgLegendRef = useRef(null);


    useEffect(() => {

        d3.select(svgLegendRef.current).append("svg")
        .attr("width", 50)
        .attr("height", 50)
        .append("circle")
        .attr("cx", 25)
        .attr("cy", 25)
        .attr("r", 25)
        .style("fill", "purple");

    });
    return(<div ref={svgLegendRef}></div>)

}


export default Circle;
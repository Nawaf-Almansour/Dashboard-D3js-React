
import * as d3 from "d3";
import {useEffect, useRef} from 'react';

const LineChart = () => {
    const svgLegendRef = useRef(null);

    useEffect(() => {
        const h = 200;
        const w = 400;

        const monthlySales = [
            {"month": 10, "sales": 20},
            {"month": 20, "sales": 14},
            {"month": 30, "sales": 20},
            {"month": 40, "sales": 21},
            {"month": 50, "sales": 15},
            {"month": 60, "sales": 22},
            {"month": 70, "sales": 9},
            {"month": 80, "sales": 6},
            {"month": 90, "sales": 23},
            {"month": 100, "sales": 7}
        ];

        let lineFun = d3
            .line()
            .x(function (d) {return d.month * 3;})
            .y(function (d) {return h-d.sales;})
            .curve(d3.curveLinear);

        const svg = d3.select(svgLegendRef.current)
            .append("svg")
            .attr( "width",w)
            .attr("height", h);


        svg.append("path")
            .attr("d", lineFun(monthlySales))
            .attr( "stroke", "purple")
            .attr( "stroke-width", 2)
            .attr( "fill", "none")


        svg.selectAll("text")
            .data(monthlySales)
            .enter()
            .append("text")
            //.text(function(d){ return d.sales; } )
            .text(function(d){ return d.sales; })
            .attr('x', function(d){ return (d.month*3)-25; })
            .attr(  'y', function(d){ return h-d.sales; })
            .attr(  "font-size", "12px")
            .attr(  "font-family", "sans-serif")
            .attr(  "fill", "#666666")
            .attr(  "text-anchor", "start")
            .attr(  "dy", ".35em")
            .attr(   "font-weight", function(d,i){
                    if (i===0 ||  i===(monthlySales.length-1)) {
                        return "bold"; }
                    else {
                        return "normal"; }
                })

    });
    return(<div ref={svgLegendRef}/>)

}


export default LineChart;
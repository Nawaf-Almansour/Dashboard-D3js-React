
import * as d3 from "d3";
import {useEffect, useRef} from 'react';

const Scatterplot = () => {
    const svgLegendRef = useRef(null);
    let svg;

    useEffect(() => {
        const h = 350;
        const w = 400;

        const monthlySales = [
            {"month":10, "sales":100},
            {"month":20, "sales":130},
            {"month":30, "sales":250},
            {"month":40, "sales":300},
            {"month":50, "sales":265},
            {"month":60, "sales":225},
            {"month":70, "sales":180},
            {"month":80, "sales":120},
            {"month":90, "sales":145},
            {"month":100, "sales":130}
        ];

        function salesKPI (d) {
            if (d>=250) { return "#33CC66"; } else
            if (d<250) { return "#9b9b9b"; }
        }
        //add min/max to array
        Array.max = function( array ){
            return Math.max.apply( Math, array );
        };

        Array.min = function( array ){
            return Math.min.apply( Math, array );
        };

        function showMinMax(ds, col, val, type){
            const max = d3.max(ds, function(d) { return d[col]; } );
            const min = d3.min(ds, function (d) {
                return d[col];
            });

            if (type==='minmax' && (val === max || val === min)) {
                return val;
            } else

            if (type==='all') {
                return val;
            }

        }

         svg = d3.select(svgLegendRef.current)
            .append("svg")
            .attr( "width",w)
            .attr("height", h)
            .attr("fill", "rgba(199,255,234,0.9)")
            .attr("rx", 14);

        svg.selectAll("circle")
            .data(monthlySales)
            .enter()
            .append("circle")
            .attr("cx", function(d){ return d.month*3; })
            .attr(   "cy", function(d){ return h-d.sales; })
            .attr("r",  7)
            .attr("fill", function(d){ return salesKPI(d.sales)})

        svg.selectAll("text")
            .data(monthlySales)
            .enter()
            .append("text")
            .text(function(d){ return showMinMax(monthlySales, 'sales', d.sales, 'minmax'); })
                .attr("x", function(d){ return (d.month*3)-25; })
    .attr( "y", function(d){ return h-d.sales; })
    .attr( "font-size", "13px")
    .attr( "font-family", "sans-serif")
    .attr(  "fill", "#fffefe")
    .attr(    "text-anchor", "start")
    },[svg]);
    return(<div style={{background: "rgba(61,136,194,0.58)", borderRadius: "8px" , padding: "30px 0px"}} ref={svgLegendRef}/>)

}


export default Scatterplot;
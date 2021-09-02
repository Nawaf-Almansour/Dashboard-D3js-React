
import * as d3 from "d3";
import {useEffect, useRef} from 'react';
import dataCsv from '../../data/MonthlySales.csv';
import dataJson from "../../data/MonthlySalesbyCategory.json";

const LineChart = () => {
    const svgLegendRef = useRef(null);

    useEffect(() => {
        const h = 200;
        const w = 400;
        const padding = 25;
        let monthlySales = []
        let salesTotal = 0.0;
        let salesAvg = 0.0;
        let metrics = [];

        monthlySales = dataJson.monthlySales

        d3.csv(dataCsv).then(function (data, err) {
            // monthlySales = data
        }).then(() => {
            buildLine();
            showTotals();
        }).catch(function (err) {
            console.log(err);  //if so, log it to the console
            throw err;
        })



        function buildLine() {

            let xScale = d3.scaleLinear()
                .domain([
                    d3.min(monthlySales, function(d){ return d.month;}) ,
                    d3.max(monthlySales, function(d){ return d.month;})
                ])
                .range([padding+5, w-padding]);



            let yScale = d3.scaleLinear()
                .domain([
                        d3.min(monthlySales, function(d){ return d.sales;}) ,

                    ])
                .range([h-padding,10]);


            // let xAxis = d3.svg.axis().scale(xScale).orient("bottom");
            // let yAxis = d3.svg.axis().scale(yScale).orient("left");

            let xAxis = d3.axisBottom(xScale)
                .tickValues([1, 2, 3, 5, 8, 13, 21])

            let yAxis = d3.axisLeft(yScale)
                .tickValues([1, 2, 3, 5, 8, 13, 21])


            let lineFun = d3
                .line()
                .x(function (d) { return ((d.month-20130001)/3.25); })
                .y(function (d) { return h-d.sales; })
                .curve(d3.curveLinear);

            const svg = d3.select(svgLegendRef.current)
                .append("svg")
                .attr("width", w)
                .attr("height", h)
                .call(xAxis)
                .call(yAxis)
                .attr("fill", "rgb(255,172,213)")
                .attr("rx", 14);

            svg.append("path")
                .attr("d", lineFun(monthlySales))
                .attr("stroke", "rgb(0,169,208)")
                .attr("stroke-width", 2)
                .attr("fill", "none")


            svg.selectAll("text")
                .data(monthlySales)
                .enter()
                .append("text")
                //.text(function(d){ return d.sales; } )
                .text(function (d) {
                    return parseFloat(d.sales);
                })
                .attr('x', function (d) {
                    return (d.month-20130001)/3.25 - 25;
                })
                .attr('y', function (d) {
                    return h-d.sales;
                })
                .attr("font-size", "13px")
                .attr("font-family", "sans-serif")
                .attr("fill", "#ffffff")
                .attr("text-anchor", "start")
                .attr("dy", ".35em")
                .attr("font-weight", function (d, i) {
                    if (i === 0 || i === (monthlySales.length - 1)) {
                        return "bold";
                    } else {
                        return "normal";
                    }
                })
        }
        function showTotals(){

            //sales total
            for (let i = 0; i < monthlySales.length; i++) {
                salesTotal += monthlySales[i]['sales']*1; //*1 to make it a number
            };

            //sales average
            salesAvg = salesTotal / monthlySales.length;

            //add metrics to array
            metrics.push("Sales Total: " + salesTotal);
            metrics.push("Sales Avg: "+salesAvg.toFixed(2));

            const t = d3.select(svgLegendRef.current).append("table");

            //now add total
            t.selectAll("tr")
                .data(metrics)
                .enter()
                .append("tr")
                .append("td")
                .text(function(d){ return d; })
                .attr("font-size", "13px")
                .attr("font-family", "sans-serif")
                .attr("style" , "background-color: #00000029; color:white");

        };



    });
    return(<div style={{background: "rgb(93,38,53)", borderRadius: "8px"} } ref={svgLegendRef}/>)

}


export default LineChart;
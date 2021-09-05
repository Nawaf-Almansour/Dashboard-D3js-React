import * as d3 from "d3";
import {useEffect, useRef} from 'react';
import { Col, Row} from "reactstrap";
// import dataCsv from '../../data/MonthlySales.csv';
// import dataJson from "../../data/MonthlySalesbyCategory.json";

const LineChart = () => {
    const svgLegendRef = useRef(null);

    // let monthlySales = [];
    let svg;
    useEffect(() => {
        const h = 100;
        const w = 350;
        const padding = 20;
        let salesTotal = 0.0;
        let salesAvg = 0.0;
        let metrics = [];

        // monthlySales = dataJson.monthlySales

        // d3.csv(dataCsv).then(function (data, err) {
        //     // monthlySales = data
        // }).then(() => {
        //     buildLine();
        //     showTotals();
        // }).catch(function (err) {
        //     console.log(err);  //if so, log it to the console
        //     throw err;
        // })


        function getDate(d) {

            //20130101
            const strDate = String(d);

            let year = strDate.substr(0, 4);
            let month = strDate.substr(4, 2) - 1; //zero based index
            let day = strDate.substr(6, 2);

            return new Date(year, month, day);
        }

        function buildLine(ds) {


            let minDate = getDate(ds.monthlySales[0]['month']);
            let maxDate = getDate(ds.monthlySales[ds.monthlySales.length - 1]['month']);

            let xScale = d3.scaleLinear()
                .domain([
                    d3.min(ds.monthlySales, function (d) {
                        return d.month;
                    }),
                    d3.max(ds.monthlySales, function (d) {
                        return d.month;
                    })
                ])
                .range([padding + 5, w - padding]);


            let yScale = d3.scaleLinear()
                .domain([
                    d3.min(ds.monthlySales, function (d) {
                        return d.sales;
                    }),

                ])
                .range([h - padding, 10]);

            let xAxisGen = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b"));
            let yAxisGen = d3.axisLeft(yScale).ticks(4);


            // let xAxis = d3.axisBottom(xScale)
            //     .tickValues([1, 2, 3, 5, 8, 13, 21])
            //
            // let yAxis = d3.axisLeft(yScale)
            //     .tickValues([1, 2, 3, 5, 8, 13, 21])

            let lineFun = d3
                .line()
                .x(function (d) {
                    return ((d.month - 20130001) / 3.25);
                })
                .y(function (d) {
                    return h - d.sales;
                })
                .curve(d3.curveLinear);

            svg = d3.select(svgLegendRef.current)
                .append("svg")
                .attr("width", w)
                .attr("height", h)
                .call(xAxisGen)
                .call(yAxisGen)
                .attr("fill", "rgb(255,172,213)")
                .attr("rx", 14);

            svg.append("g").call(yAxisGen)
                .attr("class", "y-axis")
                .attr("transform", "translate(" + padding + ", 0)");


            svg.append("g").call(xAxisGen)
                .attr("class", "x-axis")
                .attr("transform", "translate(0," + (h - padding) + ")");

            svg.append("path")
                .attr("d", lineFun(ds.monthlySales))
                .attr("stroke", "rgb(0,169,208)")
                .attr("stroke-width", 4)
                .attr("fill", "none")
                .attr("class", "path-" + ds.category);



            svg.selectAll("text")
                .data(ds.monthlySales)
                .enter()
                .append("text")
                //.text(function(d){ return d.sales; } )
                .text(function (d) {
                    return parseFloat(d.sales);
                })
                .attr('x', function (d) {
                    return (d.month - 20130001) / 3.25 - 25;
                })
                .attr('y', function (d) {
                    return h - d.sales;
                })
                .attr("font-size", "13px")
                .attr("font-family", "sans-serif")
                .attr("fill", "#ffffff")
                .attr("text-anchor", "start")
                .attr("dy", ".35em")
                .attr("font-weight", function (d, i) {
                    if (i === 0 || i === (ds.monthlySales.length - 1)) {
                        return "bold";
                    } else {
                        return "normal";
                    }
                })
        }

        function updateLine(ds) {

            let minDate = getDate(ds.monthlySales[0]['month']);
            let maxDate = getDate(ds.monthlySales[ds.monthlySales.length - 1]['month']);

            //scales
            let xScale = d3.scaleTime()
                .domain([minDate, maxDate])
                .range([padding + 5, w - padding]);


            let yScale = d3.scaleLinear()
                .domain([0, d3.max(ds.monthlySales, function (d) {
                    return d.sales;
                })])
                .range([h - padding, 10]);

            // var xAxisGen = d3.svg.axis().scale(xScale).orient("bottom")
            //     .tickFormat(d3.timeFormat("%b"))
            //     .ticks(ds.monthlySales.length - 1); //adjust number of ticks
            //scaleLinear
            // var yAxisGen = d3.svg.axis().scale(yScale).orient("left")
            //     .ticks(4);

            var lineFun = d3
                .line()
                .x(function (d) {
                    return xScale(getDate(d.month));
                })
                .y(function (d) {
                    return yScale(d.sales);
                })
                .curve(d3.curveLinear);


            let xAxisGen = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b"));
            let yAxisGen = d3.axisLeft(yScale).ticks(4);

            svg.selectAll("g.y-axis").call(yAxisGen)

            svg.selectAll("g.x-axis").call(xAxisGen)

            svg.selectAll(".path-" + ds.category)
                .attr('d' , lineFun(ds.monthlySales));


        }

        function showTotals(ds) {

            //sales total
            for (let i = 0; i <ds.monthlySales.length; i++) {
                salesTotal += ds.monthlySales[i]['sales'] * 1; //*1 to make it a number
            };

            //sales average
            salesAvg = salesTotal / ds.monthlySales.length;

            //add metrics to array
            metrics.pop();
            metrics.pop();
            metrics.push("Sales Total: " + salesTotal);
            metrics.push("Sales Avg: " + salesAvg.toFixed(2));

            const t = d3.select(svgLegendRef.current).append("table");

            //now add total
            t.selectAll("tr")
                .data(metrics)
                .enter()
                .append("tr")
                .append("td")
                .text(function (d) {
                    return d;
                })
                .attr("font-size", "13px")
                .attr("font-weight", "900")
                .attr("font-family", "sans-serif")
                .attr("style", "font-weight: 700; color:rgb(0,169,208)");
        }

        function showMinMax(ds, col, val, type) {
            var max = d3.max(ds, function (d) {
                return d[col];
            });
            var min = d3.min(ds, function (d) {
                return d[col];
            });

            if (type === 'minmax' && (val === max || val === min)) {
                return val;
            } else if (type === 'all') {
                return val;
            }

        }

        function showHeader(ds) {
            d3.select(svgLegendRef.current).append("h2")
                .text(ds.category + " Sales")
                .attr("font-size", "13px")
                .attr("font-family", "sans-serif")
                .attr("style", "background-color: #00000029; color:white");
        }


        d3.json("https://api.github.com/repos/bsullins/d3js-resources/contents/monthlySalesbyCategoryMultiple.json", function (error, data) {

        }).then((data) =>{
            let decodedData = JSON.parse(window.atob(data.content));
            decodedData.contents.forEach(function (ds) {
                showHeader(ds);
                buildLine(ds);
                showTotals(ds);

            })
            d3.select("select")
                .on("change", function (d) {

                    //get selected option
                    let sel = d3.select('#label-option').node().value;

                    let decodedData = JSON.parse(window.atob(data.content));

                    decodedData.contents.forEach(function (ds) {
                        console.log(ds)
                        svg.selectAll("text")
                            .data(ds.monthlySales)
                            .text(function (d) {
                                console.log(d)
                                return showMinMax(ds.monthlySales, 'sales', d.sales, sel);


                            });
                        updateLine(ds);


                    })
                });

            // d3.select("select")
            //     .on("change", function (d, i) {
            //
            //         //get selected option
            //         let sel = d3.select('#date-option').node().value;
            //
            //         // console.log(ds.monthlySales.length-sel);
            //         // console.log(sel);
            //
            //         let decodedData = JSON.parse(window.atob(data.content));
            //
            //         decodedData.contents.forEach(function (ds) {
            //
            //             ds.monthlySales.splice(0, ds.monthlySales.length - sel);
            //
            //             // console.log(ds.monthlySales.length);
            //
            //             // updateLine(ds);
            //
            //
            //         });
            //
            //     })
        });


    }, [svg]);
    return (
        <>
            {/*<Row>*/}
            {/*    <Col md="6">*/}
            {/*        <p>Show Labels*/}
            {/*            <select id="label-option">*/}
            {/*                <option value="all">All</option>*/}
            {/*                <option value="minmax">Min/Max</option>*/}
            {/*                <option value="none">None</option>*/}
            {/*            </select>*/}
            {/*        </p>*/}
            {/*    </Col >*/}
            {/*    <Col md="6">*/}
            {/*        <p>Choose Date Range*/}
            {/*            <select id="date-option">*/}
            {/*                <option value="12">Last Year</option>*/}
            {/*                <option value="6">Last 6/mo</option>*/}
            {/*                <option value="3">Last Quarter</option>*/}
            {/*            </select>*/}
            {/*        </p>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <div style={{background: "rgb(182 0 50)", borderRadius: "8px"}} ref={svgLegendRef}/>
            )

        </>
    )

}


export default LineChart;
(this["webpackJsonpdashbord-d3"]=this["webpackJsonpdashbord-d3"]||[]).push([[6],{219:function(t,e,a){"use strict";var n=a(46),r=a(12),c=a(0),s=a(649),i=a(650),o=a(651),l=a(674),h=a(652),d=a(653),u=a(654),j=a(7),b=function(t){var e=t.route,a=t.title;return Object(j.jsx)(r.b,{className:"navbar__item",to:e,children:a})},p=function(t){var e=Object(c.useState)(!1),a=Object(n.a)(e,2),r=a[0],p=a[1];return Object(j.jsx)("div",{children:Object(j.jsxs)(s.a,{className:"port-navbar port-default absolute",color:"transparent",dark:!0,expand:"md",children:[Object(j.jsx)(i.a,{className:"port-navbar-brand",href:"/",children:"Nawaf"}),Object(j.jsx)(o.a,{onClick:function(){return p(!r)}}),Object(j.jsx)(l.a,{isOpen:r,navbar:!0,children:Object(j.jsxs)(h.a,{className:"navbar mr-auto",navbar:!0,children:[Object(j.jsx)(d.a,{className:"port-navbar-item navbar__title navbar__item",children:Object(j.jsx)(b,{route:"/",title:"Home"})}),Object(j.jsx)(d.a,{className:"port-navbar-item navbar__title navbar__item",children:Object(j.jsx)(b,{route:"/about",title:"About"})}),Object(j.jsx)(d.a,{className:"port-navbar-item navbar__title navbar__item",children:Object(j.jsx)(u.a,{href:"https://github.com/Nawaf-Almansour/Dashboard-D3js-React",children:"GitHub"})})]})})]})})},m=function(t){var e=t.route,a=t.title;return Object(j.jsx)(r.b,{to:e,children:a})},x=function(t){var e=Object(c.useState)(!1),a=Object(n.a)(e,2),r=a[0],b=a[1];return Object(j.jsx)("div",{children:Object(j.jsxs)(s.a,{className:"port-navbar port-default absolute",color:"transparent",dark:!0,expand:"md",children:[Object(j.jsx)(i.a,{className:"port-navbar-brand",href:"/",children:"Nawaf"}),Object(j.jsx)(o.a,{onClick:function(){return b(!r)}}),Object(j.jsx)(l.a,{isOpen:r,navbar:!0,children:Object(j.jsxs)(h.a,{className:"mr-auto",navbar:!0,children:[Object(j.jsx)(d.a,{className:"port-navbar-item",children:Object(j.jsx)(m,{route:"/",title:"Home"})}),Object(j.jsx)(d.a,{children:Object(j.jsx)(m,{route:"/about",title:"About"})}),Object(j.jsx)(d.a,{className:"port-navbar-item",children:Object(j.jsx)(u.a,{href:"https://github.com/",children:"GitHub"})})]})})]})})};e.a=function(t){var e=t.children,a=t.className;return Object(j.jsxs)("div",{className:"layout-container",children:[Object(j.jsx)(p,{}),Object(j.jsx)("main",{className:"cover ".concat(a),children:Object(j.jsx)("div",{className:"wrapper",children:e})}),Object(j.jsx)(x,{})]})}},464:function(t){t.exports=JSON.parse('{"category":"Furniture","region":"West","monthlySales":[{"month":20130101,"sales":38},{"month":20130201,"sales":35},{"month":20130301,"sales":41},{"month":20130401,"sales":55},{"month":20130501,"sales":58},{"month":20130601,"sales":66},{"month":20130701,"sales":74},{"month":20130801,"sales":78},{"month":20130901,"sales":38},{"month":20131001,"sales":30},{"month":20131101,"sales":26},{"month":20131201,"sales":29}]}')},465:function(t,e,a){},625:function(t,e,a){"use strict";a.r(e);var n,r=a(47),c=a(48),s=a(53),i=a(57),o=a(0),l=a.n(o),h=a(219),d=a(212),u=a(7),j=function(){var t,e=Object(o.useRef)(null);return Object(o.useEffect)((function(){var a=300,n=[5,10,13,19,21,25,11,25,22,18,7];(t=d.i(e.current).append("svg").attr("width",a).attr("height",100)).selectAll("rect").data(n).enter().append("rect").attr("x",(function(t,e){return e*(a/n.length)})).attr("y",(function(t){return 100-4*t})).attr("width",a/n.length-2).attr("height",(function(t){return 4*t})).attr("fill",(function(t){return(e=t)<=20?"#666666":e>20?"#FF0033":void 0;var e})),t.selectAll("text").data(n).enter().append("text").text((function(t){return t})).attr("text-anchor","middle").attr("x",(function(t,e){return e*(a/n.length)+(a/n.length-2)/2})).attr("y",(function(t){return 100-4*t+14})).attr("font-family","sans-serif").attr("font-size",13).attr("fill","#ffffff").attr("font-weight","700").attr("style"," color:white")}),[t]),Object(u.jsx)("div",{style:{background:"rgba(61,194,131,0.58)",borderRadius:"8px",padding:"30px 0px"},ref:e})},b=a.p+"static/media/MonthlySales.e4907134.csv",p=a(464),m=function(){var t,e=Object(o.useRef)(null),a=[];return Object(o.useEffect)((function(){var n=200,r=400,c=0,s=0,i=[];a=p.monthlySales,d.c(b).then((function(t,e){})).then((function(){!function(){var c=d.h().domain([d.g(a,(function(t){return t.month})),d.f(a,(function(t){return t.month}))]).range([30,375]),s=d.h().domain([d.g(a,(function(t){return t.sales}))]).range([175,10]),i=d.a(c).tickValues([1,2,3,5,8,13,21]),o=d.b(s).tickValues([1,2,3,5,8,13,21]),l=d.e().x((function(t){return(t.month-20130001)/3.25})).y((function(t){return n-t.sales})).curve(d.d);(t=d.i(e.current).append("svg").attr("width",r).attr("height",n).call(i).call(o).attr("fill","rgb(255,172,213)").attr("rx",14)).append("path").attr("d",l(a)).attr("stroke","rgb(0,169,208)").attr("stroke-width",4).attr("fill","none"),t.selectAll("text").data(a).enter().append("text").text((function(t){return parseFloat(t.sales)})).attr("x",(function(t){return(t.month-20130001)/3.25-25})).attr("y",(function(t){return n-t.sales})).attr("font-size","13px").attr("font-family","sans-serif").attr("fill","#ffffff").attr("text-anchor","start").attr("dy",".35em").attr("font-weight",(function(t,e){return 0===e||e===a.length-1?"bold":"normal"}))}(),function(){for(var t=0;t<a.length;t++)c+=1*a[t].sales;s=c/a.length,i.push("Sales Total: "+c),i.push("Sales Avg: "+s.toFixed(2)),d.i(e.current).append("table").selectAll("tr").data(i).enter().append("tr").append("td").text((function(t){return t})).attr("font-size","13px").attr("font-family","sans-serif").attr("style","background-color: #00000029; color:white")}()})).catch((function(t){throw console.log(t),t}))}),[t]),Object(u.jsx)("div",{style:{background:"rgb(93,38,53)",borderRadius:"8px"},ref:e})},x=function(){var t,e=Object(o.useRef)(null);return Object(o.useEffect)((function(){var a=[{month:10,sales:100},{month:20,sales:130},{month:30,sales:250},{month:40,sales:300},{month:50,sales:265},{month:60,sales:225},{month:70,sales:180},{month:80,sales:120},{month:90,sales:145},{month:100,sales:130}];Array.max=function(t){return Math.max.apply(Math,t)},Array.min=function(t){return Math.min.apply(Math,t)},(t=d.i(e.current).append("svg").attr("width",400).attr("height",350).attr("fill","rgba(199,255,234,0.9)").attr("rx",14)).selectAll("circle").data(a).enter().append("circle").attr("cx",(function(t){return 3*t.month})).attr("cy",(function(t){return 350-t.sales})).attr("r",7).attr("fill",(function(t){return function(t){return t>=250?"#33CC66":t<250?"#9b9b9b":void 0}(t.sales)})),t.selectAll("text").data(a).enter().append("text").text((function(t){return function(t,e,a,n){var r=d.f(t,(function(t){return t[e]})),c=d.g(t,(function(t){return t[e]}));return"minmax"!==n||a!==r&&a!==c?"all"===n?a:void 0:a}(a,"sales",t.sales,"minmax")})).attr("x",(function(t){return 3*t.month-25})).attr("y",(function(t){return 350-t.sales})).attr("font-size","13px").attr("font-family","sans-serif").attr("fill","#fffefe").attr("text-anchor","start")}),[t]),Object(u.jsx)("div",{style:{background:"rgba(61,136,194,0.58)",borderRadius:"8px",padding:"30px 0px"},ref:e})},f=a(81),O=a(165),v=a(332),g=[{title:"Terminator",value:21,year:1984},{title:"Commando",value:81,year:1985},{title:"Predator",value:25,year:1987},{title:"Raw Deal",value:26,year:1986},{title:"The Running Man",value:11,year:1987},{title:"Total Recall",value:44,year:1990},{title:"Terminator 2",value:0,year:1991},{title:"Last Action Hero",value:22,year:1993},{title:"True Lies",value:51,year:1994},{title:"Eraser",value:29,year:1996},{title:"Terminator 3",value:2,year:2003}],y=a(164),w=a(220),k=a(256),N=(a(465),function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){var t="axis".concat(this.props.orient),e=w[t]().scale(this.props.scale).tickSize(-this.props.tickSize).tickPadding([12]).ticks([4]);Object(k.a)(this.axisElement).call(e)}},{key:"render",value:function(){var t=this;return Object(u.jsx)("g",{className:"Axis Axis-".concat(this.props.orient),ref:function(e){t.axisElement=e},transform:this.props.translate})}}]),a}(o.Component)),A=function(t){var e=t.scales,a=t.margins,n=t.svgDimensions,r=n.height,c=n.width,s={orient:"Bottom",scale:e.xScale,translate:"translate(0, ".concat(r-a.bottom,")"),tickSize:r-a.top-a.bottom},i={orient:"Left",scale:e.yScale,translate:"translate(".concat(a.left,", 0)"),tickSize:c-a.left-a.right};return Object(u.jsxs)("g",{children:[Object(u.jsx)(N,Object(y.a)({},s)),Object(u.jsx)(N,Object(y.a)({},i))]})},S=a(673),C=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).colorScale=Object(v.a)().domain([0,n.props.maxValue]).range(["#F3E5F5","#7B1FA2"]).interpolate(S.a),n}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.scales,n=e.margins,r=e.data,c=e.svgDimensions,s=a.xScale,i=a.yScale,o=c.height,l=r.map((function(e){return Object(u.jsx)("rect",{x:s(e.title),y:i(e.value),height:o-n.bottom-a.yScale(e.value),width:s.bandwidth(),fill:t.colorScale(e.value)},e.title)}));return Object(u.jsx)("g",{children:l})}}]),a}(o.Component),M=a(108),D=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).xScale=Object(O.a)(),t.yScale=Object(v.a)(),t}return Object(c.a)(a,[{key:"render",value:function(){var t={top:50,right:20,bottom:100,left:60},e={width:Math.max(this.props.parentWidth,300),height:500},a=Math.max.apply(Math,Object(f.a)(g.map((function(t){return t.value})))),n=this.xScale.padding(.5).domain(g.map((function(t){return t.title}))).range([t.left,e.width-t.right]),r=this.yScale.domain([0,a]).range([e.height-t.bottom,t.top]);return Object(u.jsxs)("svg",{width:e.width,height:e.height,children:[Object(u.jsx)(A,{scales:{xScale:n,yScale:r},margins:t,svgDimensions:e}),Object(u.jsx)(C,{scales:{xScale:n,yScale:r},margins:t,data:g,maxValue:a,svgDimensions:e})]})}}]),a}(o.Component),P=(n=D,function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={containerWidth:null},n.fitParentContainer=n.fitParentContainer.bind(Object(M.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width;t!==e&&this.setState({containerWidth:e})}},{key:"renderChart",value:function(){var t=this.state.containerWidth;return Object(u.jsx)(n,Object(y.a)(Object(y.a)({},this.props),{},{parentWidth:t}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return Object(u.jsx)("div",{style:{background:"rgba(194,183,61,0.58)",borderRadius:"8px",padding:"30px 0px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper",children:e&&this.renderChart()})}}]),a}(o.Component)),R=a(655),z=a(660),_=a(308),W=a(309),E=a(632),F=a(633),I=a(631),V=a(661),L=a(580),T=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],H=function(t){return Object(u.jsxs)("div",{style:{background:"rgba(61,136,194,0.58)",borderRadius:"8px",padding:"30px 0px"},children:[Object(u.jsx)("h4",{children:"A demo of synchronized AreaCharts"}),Object(u.jsxs)(R.a,{width:500,height:200,data:T,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(u.jsx)(z.a,{strokeDasharray:"3 3"}),Object(u.jsx)(_.a,{dataKey:"name"}),Object(u.jsx)(W.a,{}),Object(u.jsx)(E.a,{}),Object(u.jsx)(F.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"})]}),Object(u.jsx)("p",{children:"Maybe some other content"}),Object(u.jsxs)(R.a,{width:500,height:200,data:T,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(u.jsx)(z.a,{strokeDasharray:"3 3"}),Object(u.jsx)(_.a,{dataKey:"name"}),Object(u.jsx)(W.a,{}),Object(u.jsx)(E.a,{}),Object(u.jsx)(F.a,{type:"monotone",dataKey:"pv",stroke:"#82ca9d",fill:"#82ca9d"}),Object(u.jsx)(I.a,{})]}),Object(u.jsxs)(V.a,{width:500,height:200,data:T,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(u.jsx)(z.a,{strokeDasharray:"3 3"}),Object(u.jsx)(_.a,{dataKey:"name"}),Object(u.jsx)(W.a,{}),Object(u.jsx)(E.a,{}),Object(u.jsx)(L.a,{type:"monotone",dataKey:"pv",stroke:"#82ca9d",fill:"#82ca9d"})]})]})},K=a(629),B={labels:["1","2","3","4","5","6"],datasets:[{label:"# of Red Votes",data:[12,19,3,5,2,3],backgroundColor:"rgb(255, 99, 132)"},{label:"# of Blue Votes",data:[2,3,20,5,1,4],backgroundColor:"rgb(54, 162, 235)"},{label:"# of Green Votes",data:[3,10,13,15,22,30],backgroundColor:"rgb(75, 192, 192)"}]},G={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},J=function(){return Object(u.jsx)(K.a,{style:{background:"rgba(61,136,194,0.58)",borderRadius:"8px",padding:"30px 0px"},data:B,options:G})},U=a(671),q=a(675),Z=a(676);function Q(t,e){return Math.random()*(t-e)+e}var X=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={data:n.getScatterData()},n}return Object(c.a)(a,[{key:"getScatterData",value:function(){return(t=50,Object(f.a)(Array(t).keys()).map((function(t){return t}))).map((function(t){return{x:Q(1,50),y:Q(10,90),size:Q(8)+3}}));var t}},{key:"render",value:function(){return Object(u.jsx)("div",{style:{background:"rgba(176,61,194,0.58)",borderRadius:"8px",padding:"30px 0px"},children:Object(u.jsx)(U.a,{domain:{y:[0,100]},containerComponent:Object(u.jsx)(q.a,{zoomDomain:{x:[5,35],y:[0,100]}}),children:Object(u.jsx)(Z.a,{data:this.state.data,style:{data:{opacity:function(t){return t.datum.y%5===0?1:.7},fill:function(t){return t.datum.y%5===0?"tomato":"black"}}}})})})}}]),a}(l.a.Component),Y=a(622),$=a.n(Y),tt=a(618),et=a.n(tt),at=a(619),nt=a.n(at),rt=a(663),ct=a(621),st=a.n(ct),it=a(668),ot=a(662),lt=a(669),ht=a(664),dt="#ff9933",ut="#d9d9d9",jt=st.a.slice(2,12),bt=function(t){return t.frequency};var pt={top:40,left:80,right:80,bottom:80};function mt(t){var e,a=t.width,n=t.height,r=t.levels,c=void 0===r?5:r,s=t.margin,i=void 0===s?pt:s,o=a-i.left-i.right,l=n-i.top-i.bottom,h=Math.min(o,l)/2,d=Object(it.a)({range:[0,2*Math.PI],domain:[360,0]}),j=Object(it.a)({range:[0,h],domain:[0,Math.max.apply(Math,Object(f.a)(jt.map(bt)))]}),b=(e=jt.length,Object(f.a)(new Array(e+1)).map((function(t,a){return{angle:a*(360/e)}}))),p=function(t,e){var a=2*Math.PI/t;return Object(f.a)(new Array(t)).map((function(t,n){return{x:e*Math.sin(n*a),y:e*Math.cos(n*a)}}))}(jt.length,h),m=function(t,e,a){var n=2*Math.PI/t.length,r=new Array(t.length).fill({x:0,y:0}),c=new Array(t.length+1).fill("").reduce((function(c,s,i){if(i>t.length)return c;var o=e(a(t[i-1]))*Math.sin(i*n),l=e(a(t[i-1]))*Math.cos(i*n);return r[i-1]={x:o,y:l},c+"".concat(o,",").concat(l," ")}));return{points:r,pointString:c}}(jt,(function(t){var e;return null!==(e=j(t))&&void 0!==e?e:0}),bt),x=new ot.a({x:0,y:0});return a<10?null:Object(u.jsxs)("svg",{width:a,height:n,children:[Object(u.jsx)("rect",{fill:"#FAF7E9",width:a,height:n,rx:14}),Object(u.jsxs)(rt.a,{top:n/2-i.top,left:a/2,children:[Object(f.a)(new Array(c)).map((function(t,e){return Object(u.jsx)(lt.a,{data:b,angle:function(t){var e;return null!==(e=d(t.angle))&&void 0!==e?e:0},radius:(e+1)*h/c,fill:"none",stroke:ut,strokeWidth:2,strokeOpacity:.8,strokeLinecap:"round"},"web-".concat(e))})),Object(f.a)(new Array(jt.length)).map((function(t,e){return Object(u.jsx)(ht.a,{from:x,to:p[e],stroke:ut},"radar-line-".concat(e))})),Object(u.jsx)("polygon",{points:m.pointString,fill:dt,fillOpacity:.3,stroke:dt,strokeWidth:1}),m.points.map((function(t,e){return Object(u.jsx)("circle",{cx:t.x,cy:t.y,r:4,fill:"#f5810c"},"radar-point-".concat(e))}))]})]})}var xt=a(665),ft=a(666),Ot=a(667),vt=a(329),gt=a.n(vt),yt=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).roles=["Data","visualization","AI"],t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsx)(h.a,{className:"cover",children:Object(u.jsxs)("div",{className:"main-section",children:[Object(u.jsx)("div",{className:"background-image"}),Object(u.jsx)(xt.a,{children:Object(u.jsxs)(ft.a,{children:[Object(u.jsx)(Ot.a,{md:"6",children:Object(u.jsx)("div",{className:"hero-section",children:Object(u.jsx)("div",{className:"flipper",children:Object(u.jsxs)("div",{className:"back",children:[Object(u.jsxs)("div",{className:"hero-section-content",children:[Object(u.jsx)(gt.a,{left:!0,children:Object(u.jsx)("h2",{children:" Data visualization "})}),Object(u.jsx)(gt.a,{bottom:!0,children:Object(u.jsx)("div",{className:"hero-section-content-intro",children:"Have a look at my project and enjoin."})})]}),Object(u.jsx)("div",{className:"shadow-custom"})]})})})}),Object(u.jsxs)(Ot.a,{md:"6",className:"hero-welcome-wrapper",children:[Object(u.jsx)(gt.a,{bottom:!0,children:Object(u.jsx)("div",{className:"hero-welcome-text",children:Object(u.jsx)("h1",{children:"Welcome to the  website What Is Data Visualization? Definition, Examples..."})})}),Object(u.jsx)(et.a,{loop:!0,typeSpeed:70,backSpeed:70,strings:this.roles,fadeOutDelay:1e3,loopCount:0,showCursor:!0,className:"self-typed",cursorChar:"|"}),Object(u.jsx)("div",{className:"hero-welcome-bio",children:Object(u.jsx)("h1",{children:"Let's take a look on my work."})})]}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)(j,{})})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)("div",{className:"title-chart",children:Object(u.jsx)("h4",{children:"As you can see, one potential problem with a strip plot is that you could have very dense grouping of data points, leading to data points being plotted over top of one another on the chart and obscuring the data."})})})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(m,{})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)("div",{className:"title-chart",children:Object(u.jsx)("h4",{children:"As you can see, one potential problem with a strip plot is that you could have very dense grouping of data points, leading to data points being plotted over top of one another on the chart and obscuring the data."})})})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(x,{})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)("div",{className:"title-chart",children:Object(u.jsx)("h4",{children:"As you can see, one potential problem with a strip plot is that you could have very dense grouping of data points, leading to data points being plotted over top of one another on the chart and obscuring the data."})})})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(P,{})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)("div",{className:"title-chart",children:Object(u.jsx)("h4",{children:"As you can see, one potential problem with a strip plot is that you could have very dense grouping of data points, leading to data points being plotted over top of one another on the chart and obscuring the data."})})})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(H,{})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)("div",{className:"title-chart",children:Object(u.jsx)("h4",{children:"As you can see, one potential problem with a strip plot is that you could have very dense grouping of data points, leading to data points being plotted over top of one another on the chart and obscuring the data."})})})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(J,{})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)("div",{className:"title-chart",children:Object(u.jsx)("h4",{children:"As you can see, one potential problem with a strip plot is that you could have very dense grouping of data points, leading to data points being plotted over top of one another on the chart and obscuring the data."})})})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(X,{})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)("div",{className:"title-chart",children:Object(u.jsx)("h4",{children:"As you can see, one potential problem with a strip plot is that you could have very dense grouping of data points, leading to data points being plotted over top of one another on the chart and obscuring the data."})})})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrapper  py-3",children:Object(u.jsxs)("div",{style:{height:"400px"},children:[Object(u.jsx)($.a,{children:function(t){var e=t.width,a=t.height;return Object(u.jsx)(mt,{width:e,height:a})}}),","]})}),Object(u.jsx)(Ot.a,{md:"6",xs:"12",lg:"6",className:"hero-welcome-wrappe py-3",children:Object(u.jsx)(nt.a,{children:Object(u.jsx)("div",{className:"title-chart",children:Object(u.jsx)("h4",{children:"As you can see, one potential problem with a strip plot is that you could have very dense grouping of data points, leading to data points being plotted over top of one another on the chart and obscuring the data."})})})})]})})]})})}}]),a}(l.a.Component);e.default=yt}}]);
//# sourceMappingURL=6.8868ba01.chunk.js.map
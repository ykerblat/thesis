// Source: https://d3-graph-gallery.com/graph/streamgraph_template.html

/*global d3*/

// set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 0, left: 50},
    // width = 1000 - margin.left - margin.right,
    width = 1000,
    height = 1500;

// append the svg object to the body of the page
var svg = d3.select("#streamgraph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "rotate(90)")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("../dataset/streamChart.csv").then( function(data) {
// d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv", function(data) {

  // List of groups = header of the csv files
  var keys = data.columns.slice(1)

  // Add X axis
  var x = d3.scaleLinear()
    .domain(d3.extent(data, function(d) { return d.year; }))
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height*0.8 + ")")
    // .call(d3.axisBottom(x).tickSize(-height*.7).tickValues([1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970,	1971, 1972, 1973,	1974, 1975,	1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,	1984,	1985,	1986, 1987, 1988, 1989,	1990,	1991,	1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]))
    .call(d3.axisBottom(x).tickValues([1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005,	2010, 2015, 2020]))
    .select(".domain").remove()
  // Customization
  svg.selectAll(".tick line").attr("stroke", "#b8b8b8")
  

// svg.append("tickValues")
//     .attr("transform", "rotate(90)")


  // Add X axis label:
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height-30 )
      .text("Time (year)");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([-30000000, 30000000])
    .range([ height, 0 ]);

  // color palette
  // var color = d3.scaleOrdinal()
  //   .domain(keys)
  //   .range(d3.schemeDark2);

  var color = d3.scaleOrdinal()
    .domain(keys)
    .range(d3.schemeSet1);


  //stack the data?
  var stackedData = d3.stack()
    .offset(d3.stackOffsetSilhouette)
    .keys(keys)
    (data)

  // create a tooltip
  var Tooltip = svg
    .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("opacity", 0)
    .style("font-size", 17)

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    Tooltip.style("opacity", 1)
    d3.selectAll(".myArea").style("opacity", 0.2)
    d3.select(this)
      .style("stroke", "yellow")
      .style("opacity", 1)
  }
  var mousemove = function(d,i) {
    grp = keys[i]
    Tooltip.text(grp)
  }
  var mouseleave = function(d) {
    Tooltip.style("opacity", 0)
    d3.selectAll(".myArea").style("opacity", 1).style("stroke", "none")
   }

  // Area generator
  var area = d3.area()
    .x(function(d) { return x(d.data.year); })
    .y0(function(d) { return y(d[0]); })
    .y1(function(d) { return y(d[1]); })

  // Show the areas
  svg
    .selectAll("mylayers")
    .data(stackedData)
    .enter()
    .append("path")
      .attr("class", "myArea")
      .style("fill", function(d) { console.log(d); return color(d.key); })
      .attr("d", area)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)

})
// Source: https://www.d3-graph-gallery.com/graph/circularpacking_template.html //

/*global d3*/

// set the dimensions and margins of the graph
// const width = 600
// const height = 400

const margin = {top: 10, right: 20, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)

// Read data
// d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/11_SevCatOneNumNestedOneObsPerGroup.csv").then( function(data) {

d3.csv("../dataset/bubbleChart.csv").then( function(data) {

  // Filter a bit the data -> more than 1 million inhabitants
  data = data.filter(function(d){ return d.value>1 })

  // Color palette for continents?
  const color = d3.scaleOrdinal()
    .domain(["Asia", "Europe", "Africa", "Oceania", "Americas", "Other countries"])
    .range(d3.schemeSet2);

  // Size scale for countries
  const size = d3.scaleLinear()
    .domain([0, 50])
    .range([5,85])  // circle will be between 7 and 55 px wide

  // create a tooltip
  const tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "blue")
    // .style("border", "solid")
    // .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white");

  // Three function that change the tooltip when user hover / move / leave a cell
  const showTooltip = function(event,d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Country: " + d.key + d.value + "  million of hectoliters of wine consumed")
      .style("left", (event.x)/2 + "px")
      .style("top", (event.y)/2+30 + "px")
  }
  
  const moveTooltip = function(event, d) {
    tooltip
      .style("left", (event.x)/2 + "px")
      .style("top", (event.y)/2+30 + "px")
  }
  
  const hideTooltip = function(event, d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }


  // const mouseover = function(event, d) {
  //   tooltip
  //     .style("opacity", 1)
  // }
  // const mousemove = function(event, d) {
  //   tooltip
  //     .html('<u>' + d.key + '</u>' + d.value + " inhabitants")
  //     .style("left", (event.x)/2 + "px")
  //     .style("top", (event.y)/2+30 + "px")
  //     // .style("left", (event.x/2+20) + "px")
  //     // .style("top", (event.y/2-30) + "px")
  // }
  // var mouseleave = function(event, d) {
  //   tooltip
  //     .style("opacity", 0)
  // }

  // Initialize the circle: all located at the center of the svg area
  var node = svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("class", "node")
      .attr("r", d => size(d.value))
      .attr("cx", width / 2)
      .attr("cy", 0)
      // .style("fill", d => color(d.category))
      .style("fill", function (d) { return color(d.category); } )
      .style("fill-opacity", 2)
      .attr("stroke", "black")
      .style("stroke-width", 1)
      // .on("mouseover", mouseover) // What to do when hovered
      // .on("mousemove", mousemove)
      // .on("mouseleave", mouseleave)
      .on("mouseover", showTooltip )
      .on("mousemove", moveTooltip )
      .on("mouseleave", hideTooltip )
      // .transition()
      // .delay(3000)
      // .attr('cy', height)
      .call(d3.drag() // call specific function when circle is dragged
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  // Features of the forces applied to the nodes:
  const simulation = d3.forceSimulation()
      .force("forceX", d3.forceX().strength(.5).x(width * .1))
      .force("forceY", d3.forceY().strength(.5).y(height * .01))
      .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
      .force("charge", d3.forceManyBody().strength(0.9)) // Nodes are attracted one each other of value is > 0
      .force("collide", d3.forceCollide().strength(0.3).radius(function(d){ return (size(d.value)+3) }).iterations(1)) // Force that avoids circle overlapping

  // Apply these forces to the nodes and update their positions.
  // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
  
  simulation
      .nodes(data)
      .on("tick", function(d){
        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
      })

  // What happens when a circle is dragged?
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(.05).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(.03);
    d.fx = null;
    d.fy = null;
  }

})
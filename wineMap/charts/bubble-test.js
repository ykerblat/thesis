//https://observablehq.com/@d3/zoomable-circle-packing//
// https://www.d3-graph-gallery.com/graph/circularpacking_template.html //

/*global d3*/


// set the dimensions and margins of the graph
const width = 1300;
const height = 400;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height);

// Read data
  d3.csv("finalClean.csv").then( function(data) {

  // Filter a bit the data -> more than 1 million inhabitants
  // data = data.filter(function(d){ return d.value>1 });

  // Color palette for continents
  const color = d3.scaleOrdinal()
    .domain(["Government", "Military", "Business and Finance", "Intellectuals", "'Rebels'"])
    .range(d3.schemeTableau10);

  // Size scale for countries
  const size = d3.scaleLinear()
    .domain([0, 10000])
    .range([5,800]);  // circle will be between 7 and 55 px wide

  // create a tooltip
  const Tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "5px");

        
  // Three function that change the tooltip when user hover / move / leave a cell
  const mouseover = function(event, d) {
    Tooltip
      .style("opacity", 1);
  };
  const mousemove = function(event, d) {
    Tooltip
      // .html('<u>' + d.key + '</u>' + '<b>' + " ("+ d.category + ")" + '</b>' + "<br>" + d.value + " portraits with facial hair at the National Portrait Gallery")
      .html ("There are " + '<b>'+ d.value + '</b>' + " portraits that display men with facial hair as "+ '<b>' + d.key + '</b>' + " at the National Portrait Gallery (within the " + '<b>' + d.category + '</b>' + " job category.)")
      .style("left", (event.x/2+20) + "px")
      .style("top", (event.y/2-30) + "px");

  };
  var mouseleave = function(event, d) {
    Tooltip
      .style("opacity", 2);
  };

      
  // Initialize the circle: all located at the center of the svg area
  var node = svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("class", "node")
      .attr("r", d => size(d.value))
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .style("fill", d => color(d.category))
      .style("fill-opacity", 2)
      .attr("stroke", "black")
      .style("stroke-width", 1)
      .on("mouseover", mouseover) // What to do when hovered
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .call(d3.drag() // call specific function when circle is dragged
           .on("start", dragstarted)
           .on("drag", dragged)
           .on("end", dragended));


  // Features of the forces applied to the nodes:
  const simulation = d3.forceSimulation()
      // .force("forceX", d3.forceX().strength(.5).x(width * .5))
      .force("forceY", d3.forceY().strength(.5).y(height * .5))
      .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
      .force("charge", d3.forceManyBody().strength(.9)) // Nodes are attracted one each other if value is > 0
      .force("collide", d3.forceCollide().strength(0.6).radius(function(d){ return (size(d.value)+3) }).iterations(1)); // Force that avoids circle overlapping

  // Apply these forces to the nodes and update their positions.
  // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
  simulation
      .nodes(data)
      .on("tick", function(d){
        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
      });

  // What happens when a circle is dragged?
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(.01).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(.00.8);
    d.fx = null;
    d.fy = null;
  }

});

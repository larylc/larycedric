
const dataArray = [30, 30, 30];

function plot_bars(x) {
const rect = d3.select(x)
    .selectAll("rect")
    .data(dataArray)
    .attr("width", function(d) { return(d)})
    .attr("height", 12)
    .attr("x", 1)
    .attr("y", function(d,i) {return i*15 } );
};
  
plot_bars(".svg");

plot_bars(".svg2");

plot_bars(".svg3");

plot_bars(".svg4");

plot_bars(".svg5");

plot_bars(".svg6");

plot_bars(".svg7");


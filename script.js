
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

//themes


let theme_change = localStorage.getItem("theme-change")

if(theme_change == null){
  setTheme("light")
}else{
  setTheme(theme_change)
}

let themes = document.getElementsByClassName("theme");

for(var i= 0; themes.length > i; i++){
  themes[i].addEventListener("click", function(){
    let mode = this.dataset.mode;
    console.log("Option Clicked: ", mode);
    setTheme(mode);
    
  })
}


function setTheme(mode) {
  if(mode == "light"){
    document.getElementById("theme-style").href = "light.css"
  }
    if(mode == "dark"){
    document.getElementById("theme-style").href = "dark.css"
  }
  localStorage.setItem("theme-change", mode)
  
}

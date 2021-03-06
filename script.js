// Mobile
sectionSize = parseInt(d3.select(".section").style("width"), 10) > 672 ? "desktop" : "mobile";
console.log(sectionSize);




//Themes

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
    if(mode == "salmon"){
    document.getElementById("theme-style").href = "salmon.css"
  }
    if(mode == "sea"){
    document.getElementById("theme-style").href = "sea.css"
  }
    if(mode == "dark"){
    document.getElementById("theme-style").href = "dark.css"
  }
  localStorage.setItem("theme-change", mode)
  
}

/*
// Waffle

function chartSizer(){
  let chartWidth;
  if (sectionSize == "desktop")  {
  waffleNumber = 200;
  return waffleNumber;} 
  else {
  waffleNumber = 60;
  return waffleNumber;}
}


function drawWaffle(value) {

const waffle = d3.select('.waffle');
 
const numbers = d3.range(value);
   
waffle
	.selectAll('.block')
	.data(numbers)
	.enter()
	.append('div')
	.attr('class', 'block')
}; 

drawWaffle(chartSizer());

*/


//Animated Bar Chart 

const dataArray = [50, 50, 50, 50, 50, 50];

const rect = d3.select("#svg")
    .selectAll("rect")
    .data(dataArray)
    .attr("height", function (d) {
        return d;
    })
    .attr("width", 42)
    .attr("x", (d,i) => i * 45)
    .attr("y", 50);
  
  
  
  
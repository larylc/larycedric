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

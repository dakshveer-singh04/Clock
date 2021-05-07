const SW = document.getElementById("stopwatch");
const Timer = document.getElementById("timer");
const SW_a_win = document.getElementById("active-sw");
const Timer_a_win = document.getElementById("active-timer");
const Back = document.getElementById("back");
 
SW_a_win.style.setProperty("display","none");  
Timer_a_win.style.setProperty("display","none");
Back.style.setProperty("display","none");


/*These functions control the visibilty of divs*/
function setSW(){ 
  SW_a_win.style.display = ""; 
  Back.style.display = ""; 
  Timer.style.setProperty("display","none");
} 

function setTimer(){ 
  Timer_a_win.style.display = ""; 
  Back.style.display = ""; 
  SW.style.setProperty("display","none");
} 

function back(){
  Timer.style.display = ""; 
  SW_a_win.style.setProperty("display","none");  
  SW.style.display = ""; 
  Timer_a_win.style.setProperty("display","none");
  Back.style.setProperty("display","none");
}


/**/
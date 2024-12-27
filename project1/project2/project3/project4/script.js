var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var line = document.querySelector("#line2");
var h2 = document.querySelector("h2");

var a = 0;
var num = Math.floor(Math.random()*100)
btn.addEventListener("click",()=>{

  var Int = setInterval(()=>{

    a++;
    h1.innerHTML = a + "%";
    line.style.width = a + "%"
    
  },num)
  setTimeout(()=>{

    clearInterval(Int)
    btn.innerHTML = "Downloaded"
    btn.style.opacity = 0.6
    btn.style.pointerEvents = "none"
    h2.innerHTML = `your file is downloaded in ${num/10} miliseconds`
    
  },num*100)
})
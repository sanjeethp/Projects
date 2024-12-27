var body = document.querySelector("body")
var move = document.querySelector(".move")
var h1 = document.querySelector("h1")

body.addEventListener("mousemove",(val)=>{
    move.style.top = val.y +"px"
    move.style.left = val.x +"px"
})

h1.addEventListener("mouseenter",()=>{
    move.style.scale = 3
})
h1.addEventListener("mouseleave",()=>{
    move.style.scale = 1
})
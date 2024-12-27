
var btn = document.querySelectorAll("button")
var body = document.querySelector("body")
btn.forEach(function(val){
    val.addEventListener("click",function(){
       body.style.backgroundColor = val.innerHTML
    })
})
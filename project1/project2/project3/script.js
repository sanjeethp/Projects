var card1 = document.querySelector(".box1");
var btn = document.querySelector("button");

btn.addEventListener("click",function(){

    var c1 = Math.floor(Math.random()*255);
    var c2 = Math.floor(Math.random()*255);
    var c3 = Math.floor(Math.random()*255);

    card1.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    card1.style.borderRadius = `${c3}px`

    console.log(c1)
    console.log(c2)
    console.log(c3)

})
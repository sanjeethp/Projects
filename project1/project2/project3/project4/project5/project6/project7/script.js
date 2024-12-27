var team = ["MI","CSK","RCB","RR","GT","LSG","DC","SRH","PBK","KKR"];
var h = document.querySelector("h2");
var btn = document.querySelector("button");
btn.addEventListener("click",()=>{

    var num = Math.floor(Math.random()*team.length)
    h.innerHTML = team[num];
    h.style.color ="blue"
   
    
})
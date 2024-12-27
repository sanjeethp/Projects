var text = document.querySelector("h2");
var btn = document.querySelector("button");

var flag = 0;
    
btn.addEventListener("click",()=>{
        
        text.innerHTML = "Request Sending..."
        text.style.color = "green"
        btn.textContent = "Waiting"
    
    if(flag === 0){
    
        setTimeout(()=>{
    
            text.innerHTML = "Friend"
            text.style.color = "green"
            btn.textContent = "Remove Friend"
    
        },2000)
        flag = 1; 
    }
    else{

        text.innerHTML = "Stranger"
        text.style.color = "red"
        btn.textContent = "Add Friend"
        flag = 0;
    }
    
})

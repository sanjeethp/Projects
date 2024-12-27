const img = document.querySelector("img");
const button = document.querySelector("button");
var flag = 0
button.addEventListener("click",()=>{
    if(flag===0){
        img.setAttribute("src","https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D");
        flag = 1;
    }
    else{
        img.setAttribute("src","https://images.unsplash.com/photo-1444212477490-ca407925329e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D")
        flag = 0;
    }
})
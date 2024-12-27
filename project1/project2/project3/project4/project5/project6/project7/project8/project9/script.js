var imgs = ["https://imgs.search.brave.com/l9MYbewIpO93y8WWf0XE0rburQNwDWCSLE69hguK_F8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzE3MS0xNzEw/MzYwX21pY2tleS1t/b3VzZS5wbmc",
    "https://imgs.search.brave.com/8tsDX1KJ5Uq4QJoG7iKbeALHOAvr5mLtr9F3d6K_JFU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbWlja2V5X21v/dXNlL3NtYWxsL21p/Y2tleV9tb3VzZV9Q/Tkc0LnBuZw",
    "https://imgs.search.brave.com/oVH_-4XjZQcZA7IikVdRvj7yjJniTa142h9ZkUjy8Os/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2NhcnRvb24t/aGQtcG5nLWNvbGxl/Y3Rpb24tb2YtNy1t/aWNrZXktbW91c2Ut/Y2FydG9vbnMtaGQt/MTAyNC5wbmc"
   ]

var btn = document.querySelector("button")
var b = document.querySelector("body")


btn.addEventListener("click",()=>{
var valx = Math.floor(Math.random()*100)
var valy = Math.floor(Math.random()*100)
var num = Math.floor(Math.random()*3)
var img = document.createElement("img")
img.setAttribute("src",imgs[num])
img.style.height = "100px"
img.style.top = valx+"%"
img.style.left = valy+"%"
img.style.position = "absolute"
b.appendChild(img)


})
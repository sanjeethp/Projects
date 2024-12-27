var img = document.querySelector("img")
var movex = 0
var movey = 0

document.addEventListener("keydown", (val) => {
    if (val.code === "ArrowRight") {
        movex++
        img.style.left = movex + "%"
    }
    else if (val.code === "ArrowLeft") {
        movex--
        img.style.left = movex + "%"
    }
    else if (val.code === "ArrowUp") {
        movey--
        img.style.top = movey + "%"
    }
    else if (val.code === "ArrowDown") {
        movey++
        img.style.top = movey + "%"
    }
    else {
        console.log("other")
    }
})
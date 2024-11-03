let prev = document.querySelector(".prev")
let img = document.querySelector("img")
let next = document.querySelector(".next")
let r = 0
let time = 3000
let arypic = ["./image/2.jpg", "./image/3.jpg","./image/4.jpg","./image/5.jpg","./image/6.jpg","./image/7.jpg","./image/8.jpg","./image/9.jpg","./image/1.jpg"]

function funcheck(){
    if(r>arypic.length-1){r=0}
    else if(r<0){r = arypic.length-1}
}



function funpic(){
    funcheck()
    img.src = arypic[r]
    console.log(arypic[r])
    console.log(r)
    r=r+1
}


prev.addEventListener("click", function(){
    r=r-2
    funpic()
})

next.addEventListener("click", function(){
    funpic()
})

setInterval(funpic,time)




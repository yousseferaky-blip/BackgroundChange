
let Color = document.getElementById("Color")
let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    Color.innerHTML = "#" + Math.random().toString(16).slice(2,8);
    let ColorRandom = Color.innerHTML
    document.body.style.background = Color.innerHTML
})



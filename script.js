const main = document.querySelector("main");

const btn = document.querySelector("button");

const timer = document.querySelector("#timer");

const box = document.createElement("div")
box.classList.add("box")

const overlay = document.querySelector("#overlay")

const scoree = document.querySelector("#score")


let points = 0;
let time = 0;
let interval;

const color = () => {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    return `rgb(${r}, ${g}, ${b})`;
}
 const random = () => {
    box.style.backgroundColor = color()
     main.append(box)
    // time +=1
    // timer.textContent = time
    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;

    const randomY = Math.random()*mainH
    const randomX = Math.random()*mainW

    box.style.top = `${randomY}px`
    box.style.left = `${randomX}px`
 }

btn.addEventListener('click', () => {
    
    clearInterval(interval)
    // main.append(box);
    // random();
    // const randomY = Math.random()*100
    // const randomX = Math.random()*100

    // box.style.top = `${randomY}%`
    // box.style.left = `${randomX}%`
   interval = setInterval(() =>{
    time +=1
    timer.textContent = time
    random()

    },1000)

    setTimeout(() => {
       clearInterval(interval)
       
       box.remove()

       overlay.style.display = "flex"
       
    
       time = 0;
       timer.textContent = time;

       points = 0;
       scoree.textContent = points

       setTimeout(()=>{
        overlay.style.display = "none"
       },5000)
     
    },10000)

 
})
box.addEventListener("click", ()=>{
    points += 1
    scoree.textContent = points
})


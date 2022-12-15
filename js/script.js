
console.log("Bonjour")

const boxes = document.querySelectorAll(".box")
console.log(boxes)

boxes.forEach((box, index)=>{
    box.addEventListener("click", ()=>{
    //box.style.backgroundcolor = "green"
    //box.classList.add("active")
    box.classList.toggle("active")
    console.log("boite n°"  +(index+1) + "cliquée");
    
})})
   




